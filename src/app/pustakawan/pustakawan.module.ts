import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout/layout.component';
import {HomeComponent} from './home/home.component';
import {PustakawanRoutingModule} from './pustakawan-routing.module';
import {PeminjamanComponent} from './peminjaman/peminjaman.component';
import {RiwayatComponent} from './riwayat/riwayat.component';
import {PerpanjanganComponent} from './perpanjangan/perpanjangan.component';
import {KoleksiComponent} from './koleksi/koleksi.component';

@NgModule({
  imports: [
    PustakawanRoutingModule,
    CommonModule
  ],
  declarations: [LayoutComponent, HomeComponent, PeminjamanComponent, RiwayatComponent, PerpanjanganComponent, KoleksiComponent]
})
export class PustakawanModule {
}
