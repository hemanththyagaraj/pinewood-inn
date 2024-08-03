export type ErrorResponse = {
  code: string;
  dedails: string | null;
  hint: string | null;
  message: string | null;
};

export type Cabin = {
  created_at: string;
  description: string;
  discount: number;
  id: string;
  image: string | FileList;
  max_capacity: number;
  name: string;
  regular_price: number;
};
