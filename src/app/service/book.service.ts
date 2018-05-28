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

  static dummyBooks(): Book[] {
    return [this.dummyBook1(), this.dummyBook2()];
  }

  static dummyBook1(): Book {
    const book = new Book();
    book.id = 1;
    book.name = 'History of Modern Architecture';
    book.description = 'Buku ini adalah buku yang membahas tentang arsitektur';
    book.imageUrl = 'http://speen.co/wp-content/uploads/2017/11/recipe-book-cover-template-architecture-design.jpg';
    book.status = 'AVAILABLE';
    return book;
  }

  static dummyBook2(): Book {
    const book = new Book();
    book.id = 2;
    book.name = 'Computer Systems Architecture';
    book.description = 'Buku ini membahas berbagai macam arsitektur komputer';
    book.imageUrl = 'https://images.tandf.co.uk/common/jackets/amazon/978148223/9781482231052.jpg';
    book.status = 'UNAVAILABLE';
    return book;
  }

  getAllBook(): Observable<Book[]> {
    return of(BookService.dummyBooks());
  }

  getBook(id: number): Observable<Book> {
    return of(_.find(BookService.dummyBooks(), (book) => book.id === id));
  }

  getBookByName(name: string): Observable<Book[]> {
    return of(BookService.dummyBooks().filter((book) => book.name.toLowerCase().indexOf(name.toLowerCase()) > -1));
  }
}
