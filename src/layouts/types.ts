export interface State {
  text: string;
  response: ApiResponse | null;
  link: string;
  items: Item[];
  status: 'success' | 'error' | 'pending' | null;
  errorMessage: string;
}

export interface ResultsProps {
  currentLink: string;
  items: Item[];
  status: string | null;
}

type Results = {
  name: string;
  title: string;
  url: string;
};

export interface ApiResponse {
  results?: Results[];
  currentLink: string;
  [key: string]: unknown;
}

export interface Item {
  key?: string | string[] | undefined;
  value?: string | string[] | undefined;
  name?: string | string[] | undefined;
  title?: string | string[] | undefined;
}

export interface CustomTableProps {
  currentLink: string;
  items: Item[];
  status: string | null;
  error?: string | Error | null;
}
