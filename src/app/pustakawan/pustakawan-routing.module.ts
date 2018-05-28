import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LayoutComponent} from './layout/layout.component';
import {PeminjamanComponent} from './peminjaman/peminjaman.component';
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
        path: 'peminjaman',
        component: PeminjamanComponent
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
