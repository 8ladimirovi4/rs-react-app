import { Component } from 'react';
import { InputProps } from './types';
import './styles.css';
import { HELP } from 'utils/help';

class CustomInput extends Component<InputProps> {
  static defaultProps = {
    func: () => {},
  };

  render() {
    const { id, label, text, func } = this.props;
    const createLink = function () {
      if (text) return text;
      const localStorageText = HELP.getFromLocalStorage('text');
      if (localStorageText) return localStorageText;
      return '';
    };
    return (
      <div>
        <input
          type="text"
          id={id}
          onChange={func}
          value={createLink()}
          className="input block w-full rounded border border-gray-300 bg-transparent px-3 py-2 leading-6 outline-none focus:border-blue-600 focus:ring-0 dark:border-gray-600 dark:text-white"
          placeholder={label}
        />
      </div>
    );
  }
}

export default CustomInput;
