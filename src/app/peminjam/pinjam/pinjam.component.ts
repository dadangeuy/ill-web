import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Book} from '../../model/Book';
import {BookService} from '../../service/book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pinjam',
  templateUrl: './pinjam.component.html',
  styleUrls: ['./pinjam.component.scss']
})
export class PinjamComponent implements OnInit {
  book$: Observable<Book> = this.service.getBook$(Number(this.route.snapshot.params['id']));

  constructor(private service: BookService, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  attemptPinjam() {
    alert('Peminjaman Berhasil Diajukan!\nMohon Menunggu Untuk Persetujuan.');
  }
}
