import {ModuleWithProviders, NgModule} from '@angular/core';
import {NoPreloading, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './authentication/authentication.module#AuthenticationModule'
  },
  {
    path: 'peminjam',
    loadChildren: './peminjam/peminjam.module#PeminjamModule'
  }
];
const routing: ModuleWithProviders = RouterModule.forRoot(routes, {preloadingStrategy: NoPreloading});

@NgModule({
  imports: [routing],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
