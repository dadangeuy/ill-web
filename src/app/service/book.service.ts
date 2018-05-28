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
    return [this.dummyBook1(), this.dummyBook2(), this.dummyBook3()];
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

  static dummyBook3(): Book {
    const book = new Book();
    book.id = 3;
    book.name = 'Cost and Management Accounting';
    book.description = 'Buku ini membahas tentang dasar-dasar akuntansi';
    book.imageUrl = 'https://juta.co.za/media/filestore/2016/01/CostMan_Acc_Fundamentals_SA_Approach_cover_1.jpg';
    book.status = 'AVAILABLE';
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
