import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout/layout.component';
import {HomeComponent} from './home/home.component';
import {PustakawanRoutingModule} from './pustakawan-routing.module';
import {KonfirmasiComponent} from './konfirmasi/konfirmasi.component';
import {RiwayatComponent} from './riwayat/riwayat.component';

@NgModule({
  imports: [
    PustakawanRoutingModule,
    CommonModule
  ],
  declarations: [LayoutComponent, HomeComponent, KonfirmasiComponent, RiwayatComponent]
})
export class PustakawanModule {
}
