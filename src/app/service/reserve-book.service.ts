import {Injectable} from '@angular/core';
import {ReserveBook} from '../model/ReserveBook';
import {Observable, of} from 'rxjs';
import {UserService} from './user.service';
import {BookService} from './book.service';

@Injectable({
  providedIn: 'root'
})
export class ReserveBookService {

  constructor() {
  }

  static reserveBooks(): ReserveBook[] {
    return [this.reserveBook1()];
  }

  private static reserveBook1(): ReserveBook {
    const rbook = new ReserveBook();
    rbook.id = 1;
    rbook.user = UserService.dummyUser1();
    rbook.book = BookService.dummyBook1();
    rbook.status = 'Belum Disetujui';
    rbook.bookDate = '1 Mei 2018';
    rbook.returnDate = '2 Mei 2018';
    return rbook;
  }

  getReserveBooks(nrp: string): Observable<ReserveBook[]> {
    return of(ReserveBookService.reserveBooks().filter(book => book.user.nrp === nrp));
  }
}
