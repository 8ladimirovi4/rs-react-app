import { ReactNode, ChangeEvent } from 'react';

export interface ErrorBoundaryProps {
  children: ReactNode;
}

export interface ButtonProps {
  callBack?: () => void;
  title?: string;
  status?: string;
}

export interface InputProps {
  id: string;
  label: string;
  callBack?: (e: ChangeEvent<HTMLInputElement>) => void;
}
