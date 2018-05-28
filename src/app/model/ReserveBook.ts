import {Book} from './Book';
import {User} from './User';

export class ReserveBook {
  id: number;
  user: User;
  book: Book;
  bookDate: string;
  returnDate: string;
  status: string;
}
