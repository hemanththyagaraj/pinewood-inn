export interface Column {
  key: string;
  render?: (text: string) => React.ReactNode;
  title: string;
}

export interface TableProps<T> {
  columns: Column[];
  data: T[];
  isLoading: boolean;
}
