export interface Book {
  id: number;
  title: string;
  author: string;
  isbn: string;
  status: Status;
}

export interface Status {
  id: number;
  name: string;
}
