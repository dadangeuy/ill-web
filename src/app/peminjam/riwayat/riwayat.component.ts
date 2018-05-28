import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-riwayat',
  templateUrl: './riwayat.component.html',
  styleUrls: ['./riwayat.component.scss']
})
export class RiwayatComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  sendAlert(){
    confirm('Apakah Anda yakin ingin memperpanjang peminjaman hingga tanggal 31 May 2018?');
    router.navigate('peminjam');
  }
}
