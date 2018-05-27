import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PeminjamRoutingModule} from './peminjam-routing.module';
import {HomeComponent} from './home/home.component';
import {LayoutComponent} from './layout/layout.component';
import {BukuComponent} from './buku/buku.component';
import {PinjamComponent} from './pinjam/pinjam.component';
import {RiwayatComponent} from './riwayat/riwayat.component';

@NgModule({
  imports: [
    PeminjamRoutingModule,
    CommonModule
  ],
  declarations: [
    LayoutComponent,
    HomeComponent,
    BukuComponent,
    PinjamComponent,
    RiwayatComponent
  ]
})
export class PeminjamModule {
}
