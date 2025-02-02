import { Component } from 'react';
import type { ButtonColor, ButtonProps } from './types';

class CustomButton extends Component<ButtonProps> {
  static defaultProps = {
    func: () => {},
    title: 'button',
    color: 'blue',
  };

  BUTTON_CLASSES: Record<ButtonColor, string> = {
    blue: 'bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:bg-blue-600',
    red: 'bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:hover:bg-red-700 dark:focus:ring-red-800 dark:bg-red-600',
  };

  render() {
    const { func, title, color } = this.props;
    return (
      <button
        onClick={func}
        className={` ${this.BUTTON_CLASSES[color as ButtonColor]} text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 inline-flex items-center`}
      >
        {title}
      </button>
    );
  }
}

export default CustomButton;
