import React, { ChangeEvent } from 'react';
import { v4 as newGuid } from 'uuid';
import CustomInput from 'components/CustomInput';
import CustomButton from 'components/CustomButton';
import Results from './Results';
import { fetchData } from 'services/api';
import { ApiResponse, Item, State } from './types';
import { HELP } from 'utils/help';

class Controls extends React.Component<Record<string, never>, State> {
  TEXT = {
    INPUT_LABEL: 'paste the link from list below',
    SEARCH_BUTTON_TITLE: 'Search Button',
    ERROR_BUTTON_TITLE: 'Error Button',
    LINK: 'https://swapi.dev/api/',
  };

  state = {
    text: '',
    response: null,
    link: '',
    items: [] as Item[],
    status: null,
    errorMessage: '',
  };

  handleSetText = (evt: ChangeEvent<HTMLInputElement>) => {
    this.setState({ text: evt.target.value });
  };

  handleSetTextToLocalStorage = () => {
    HELP.setToLocalStorage({ name: 'text', value: this.state.text });
  };

  starWarsApiReq = async (fail: boolean) => {
    const link =
      this.state.text || HELP.getFromLocalStorage('text') || this.TEXT.LINK;

    this.setState({ link });
    try {
      const response: ApiResponse = await fetchData(link, fail);
      if (response) {
        const items = this.getItemsFromResponse(response, link);
        this.setState({ response, items, status: 'success', errorMessage: '' });
      }
    } catch (error) {
      console.error('Failed to fetch data:', error);
      this.setState({
        status: 'error',
        errorMessage:
          error instanceof Error
            ? error.message
            : 'An unexpected error occurred',
      });
    }
  };

  componentDidMount() {
    this.starWarsApiReq(false);
  }

  getItemsFromResponse = (
    response: ApiResponse,
    currentLink: string
  ): Item[] => {
    if (!response) return [];

    if (response.results) {
      switch (currentLink) {
        case 'https://swapi.dev/api/people/':
        case 'https://swapi.dev/api/planets/':
        case 'https://swapi.dev/api/species/':
        case 'https://swapi.dev/api/vehicles/':
        case 'https://swapi.dev/api/starships/':
          return response.results.map((item) => ({
            key: item.name || '',
            value: item.url || '',
          }));
        case 'https://swapi.dev/api/films/':
          return response.results.map((item) => ({
            key: item.title || '',
            value: item.url || '',
          }));
      }
    }

    if (typeof response === 'object' && response !== null) {
      return Object.keys(response).map((key) => {
        const value = response[key];
        return {
          key,
          value: Array.isArray(value) ? value : String(value),
        };
      });
    }
    return [];
  };

  render() {
    const { text, link, items, status, errorMessage } = this.state;

    return (
      <>
        <div className="controls-wrapper">
          <CustomInput
            func={(evt) => {
              this.handleSetText(evt);
              this.handleSetTextToLocalStorage();
            }}
            label={this.TEXT.INPUT_LABEL}
            id={newGuid()}
            text={text}
          />
          <CustomButton
            func={() => {
              this.starWarsApiReq(false);
              this.handleSetTextToLocalStorage();
              this.setState({ status: null });
            }}
            title={this.TEXT.SEARCH_BUTTON_TITLE}
            status={status}
          />
        </div>
        <div className="results-wrapper">
          {status === 'error' && (
            <div className="error-message">{errorMessage}</div>
          )}
          <Results currentLink={link} items={items} status={status} />
        </div>
        <div className="error-button">
          <CustomButton
            func={() => {
              this.starWarsApiReq(true);
            }}
            title={this.TEXT.ERROR_BUTTON_TITLE}
            color={'red'}
          />
        </div>
      </>
    );
  }
}

export default Controls;
