import { Component } from 'react';
import CustomTable from 'components/CustomTable';
import { ResultsProps } from './types';

class Results extends Component<ResultsProps> {
  render() {
    const { currentLink, items, status } = this.props;

    return (
      <div>
        <CustomTable currentLink={currentLink} items={items} status={status} />
      </div>
    );
  }
}

export default Results;
