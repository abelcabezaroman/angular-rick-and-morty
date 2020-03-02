import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationsPageComponent } from './pages/locations-page/locations-page.component';


const routes: Routes = [{
  path: '', loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule),
}, {
  path: '', loadChildren: () => import('./pages/characters-page/characters-page.module').then(m => m.CharactersPageModule),
},{
  path: '', loadChildren: () => import('./pages/locations-page/locations-page.module').then(m => m.LocationsPageModule),
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
