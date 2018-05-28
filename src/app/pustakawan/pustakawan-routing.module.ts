import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LayoutComponent} from './layout/layout.component';
import {KonfirmasiComponent} from './konfirmasi/konfirmasi.component';
import {RiwayatComponent} from './riwayat/riwayat.component';

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
        path: 'konfirmasi',
        component: KonfirmasiComponent
      },
      {
        path: 'riwayat',
        component: RiwayatComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PustakawanRoutingModule {
}