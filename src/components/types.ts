import { ReactNode, ChangeEvent } from 'react';

export interface ErrorBoundaryProps {
  children: ReactNode;
}

export interface ButtonProps {
  func?: () => void;
  title?: string;
  status?: 'success' | 'error' | 'pending' | null;
  color: string;
}

export type ButtonColor = 'blue' | 'red'; // Тип для цвета

export interface InputProps {
  id: string;
  label?: string;
  text?: string | undefined;
  link?: string;
  func?: (e: ChangeEvent<HTMLInputElement>) => void;
}
