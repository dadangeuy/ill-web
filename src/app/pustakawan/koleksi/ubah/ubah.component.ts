import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../../../service/book.service';
import {Observable, of} from 'rxjs';
import {Book} from '../../../model/Book';

@Component({
  selector: 'app-ubah',
  templateUrl: './ubah.component.html',
  styleUrls: ['./ubah.component.scss']
})
export class UbahComponent implements OnInit {
  book$: Observable<Book> = this.service.getBook(Number(this.route.snapshot.params['id']));
  statuses$: Observable<String[]> = of(['AVAILABLE', 'UNAVAILABLE']);

  constructor(private route: ActivatedRoute, private service: BookService) {
  }

  ngOnInit() {
  }

}
