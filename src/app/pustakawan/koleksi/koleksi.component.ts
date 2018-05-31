import {Component, OnInit} from '@angular/core';
import {BookService} from '../../service/book.service';
import {Observable} from 'rxjs';
import {Book} from '../../model/Book';

@Component({
  selector: 'app-koleksi',
  templateUrl: './koleksi.component.html',
  styleUrls: ['./koleksi.component.scss']
})
export class KoleksiComponent implements OnInit {
  books$: Observable<Book[]> = this.service.getAllBook();

  constructor(private service: BookService) {
  }

  ngOnInit() {
  }

}
