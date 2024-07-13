export interface PaginationProps {
  currentPage?: number;
  total?: number;
  pageSize?: number;
  onChange?: (page: number) => void;
  disabled?: boolean;
  position?: 'left' | 'center' | 'right';
}
