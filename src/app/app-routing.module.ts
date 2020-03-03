import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { LocationsPageComponent } from './pages/locations-page/locations-page.component';

=======
>>>>>>> b2d41c9e647b51bdc0cdc15ce7c007b19998a548

const routes: Routes = [{
  path: '', loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule),
}, {
  path: 'characters', loadChildren: () => import('./pages/characters-page/characters-page.module').then(m => m.CharactersPageModule),
<<<<<<< HEAD
},{
=======
}, {
>>>>>>> b2d41c9e647b51bdc0cdc15ce7c007b19998a548
  path: 'locations', loadChildren: () => import('./pages/locations-page/locations-page.module').then(m => m.LocationsPageModule),
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
