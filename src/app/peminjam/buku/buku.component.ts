import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Book} from '../../model/Book';
import {BookService} from '../../service/book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-buku',
  templateUrl: './buku.component.html',
  styleUrls: ['./buku.component.scss']
})
export class BukuComponent implements OnInit {
  book$: Observable<Book> = this.service.getBook(Number(this.route.snapshot.params['id']));

  constructor(private service: BookService, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }
}
