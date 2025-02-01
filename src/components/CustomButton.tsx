import type { ButtonProps } from './types';

function CustomButton({
  callBack = () => {},
  title = 'click me',
}: ButtonProps) {
  return (
    <button
      onClick={callBack}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {title}
    </button>
  );
}

export default CustomButton;
