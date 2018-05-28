import {Book} from './Book';

export class ReserveBook {
  id: number;
  book: Book;
  bookDate: string;
  returnDate: string;
  status: string;
}
