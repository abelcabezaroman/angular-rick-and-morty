import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationsPageComponent } from './pages/locations-page/locations-page.component';

const routes: Routes = [{
<<<<<<< HEAD
  path: '', loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule),
=======
  path: '', loadChildren: () => import('./pages/home-page/home-page.module').then(m=>m.HomePageModule),
>>>>>>> d66d5cc4dd032976e76a9806ea3722019bf7e4bf
}, {
  path: 'characters', loadChildren: () => import('./pages/characters-page/characters-page.module').then(m=>m.CharactersPageModule),
}, {
  path: 'locations', loadChildren: () => import('./pages/locations-page/locations-page.module').then(m => m.LocationsPageModule),
}, {
<<<<<<< HEAD
  path: 'characters', redirectTo: 'characters/1'
=======
  path: 'locations', redirectTo: 'locations/1'
>>>>>>> d66d5cc4dd032976e76a9806ea3722019bf7e4bf
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
