interface DataSource {
  [key: string]: unknown;
}

interface Column {
  key: string;
  render?: (text: string) => React.ReactNode;
  title: string;
}

export interface TableProps {
  columns: Column[];
  data: DataSource[];
}
