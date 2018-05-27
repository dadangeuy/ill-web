import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LayoutComponent} from './layout/layout.component';
import {BukuComponent} from './buku/buku.component';
import {PinjamComponent} from './pinjam/pinjam.component';
import {RiwayatComponent} from './riwayat/riwayat.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '', pathMatch: 'full', component: HomeComponent
      },
      {
        path: 'buku/:id', component: BukuComponent
      },
      {
        path: 'pinjam/:id', component: PinjamComponent
      },
      {
        path: 'riwayat', component: RiwayatComponent
      }
    ]
  }
];

const routing: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
  imports: [routing],
  exports: [RouterModule]
})
export class PeminjamRoutingModule {
}
