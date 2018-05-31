import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LayoutComponent} from './layout/layout.component';
import {PeminjamanComponent} from './peminjaman/peminjaman.component';
import {RiwayatComponent} from './riwayat/riwayat.component';
import {PerpanjanganComponent} from './perpanjangan/perpanjangan.component';
import {KoleksiComponent} from './koleksi/koleksi.component';
import {UbahComponent} from './koleksi/ubah/ubah.component';
import {LihatComponent} from './koleksi/lihat/lihat.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'koleksi',
        component: KoleksiComponent,
        children: [
          {
            path: '',
            component: LihatComponent
          },
          {
            path: 'ubah/:id',
            component: UbahComponent
          }
        ]
      },
      {
        path: 'peminjaman',
        component: PeminjamanComponent
      },
      {
        path: 'perpanjangan',
        component: PerpanjanganComponent
      },
      {
        path: 'riwayat',
        component: RiwayatComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PustakawanRoutingModule {
}
