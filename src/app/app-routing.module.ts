import {ModuleWithProviders, NgModule} from '@angular/core';
import {NoPreloading, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'peminjam',
    loadChildren: './peminjam/peminjam.module#PeminjamModule'
  },
  {
    path: 'pustakawan',
    loadChildren: './pustakawan/pustakawan.module#PustakawanModule'
  },
  {
    path: '',
    loadChildren: './authentication/authentication.module#AuthenticationModule'
  }
];
const routing: ModuleWithProviders = RouterModule.forRoot(routes, {preloadingStrategy: NoPreloading});

@NgModule({
  imports: [routing],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
