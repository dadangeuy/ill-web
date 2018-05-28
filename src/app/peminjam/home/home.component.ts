import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Book} from '../../model/Book';
import {BookService} from '../../service/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  books$: Observable<Book[]> = this.service.getAllBook();

  constructor(private service: BookService) {
  }

  ngOnInit() {
  }

  searchBook(name: string) {
    this.books$ = this.service.getBookByName(name);
  }
}
