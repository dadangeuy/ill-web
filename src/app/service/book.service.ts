import {Injectable} from '@angular/core';
import {Book} from '../model/Book';
import {Observable, of} from 'rxjs';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() {
  }

  private static dummyBooks(): Book[] {
    return [this.dummyBook1()];
  }

  private static dummyBook1(): Book {
    const book = new Book();
    book.id = 1;
    book.name = 'History of Modern Architecture';
    book.description = 'Buku ini adalah buku yang membahas tentang arsitektur';
    book.imageUrl = 'http://speen.co/wp-content/uploads/2017/11/recipe-book-cover-template-architecture-design.jpg';
    book.status = 'AVAILABLE';
    return book;
  }

  getAllBook(): Observable<Book[]> {
    return of(BookService.dummyBooks());
  }

  getBook(id: number): Observable<Book> {
    const res = _.find(BookService.dummyBooks(), (book) => book.id === id);
    console.log(res);
    return of();
  }
}
