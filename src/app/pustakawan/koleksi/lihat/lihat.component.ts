import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Book} from '../../../model/Book';
import {BookService} from '../../../service/book.service';

@Component({
  selector: 'app-lihat',
  templateUrl: './lihat.component.html',
  styleUrls: ['./lihat.component.scss']
})
export class LihatComponent implements OnInit {
  books$: Observable<Book[]> = this.service.getAllBook();

  constructor(private service: BookService) {
  }

  ngOnInit() {
  }

}
