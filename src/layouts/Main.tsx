import { Component } from 'react';
import Controls from './Controls';
import './styles.css';

class Main extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <Controls />
      </div>
    );
  }
}

export default Main;
