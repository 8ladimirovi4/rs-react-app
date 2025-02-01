import { InputProps } from './types';
import './styles.css';
import { useState } from 'react';

function CustomInput({ id, label, callBack = () => {} }: InputProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="relative mb-3">
      <input
        type="text"
        id={id}
        onChange={callBack}
        className="block w-full rounded border border-gray-300 bg-transparent px-3 py-2 leading-6 outline-none focus:border-blue-600 focus:ring-0 dark:border-gray-600 dark:text-white"
        placeholder={label}
      />
    </div>
  );
}

export default CustomInput;
