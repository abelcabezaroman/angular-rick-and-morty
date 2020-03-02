import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharactersPageComponent } from './pages/characters-page/characters-page.component';


const routes: Routes = [{
  path: '', loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule),
}, {
  path: 'locations', loadChildren: () => import('./pages/locations-page/locations-page.module').then(m => m.LocationsPageModule),
}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
