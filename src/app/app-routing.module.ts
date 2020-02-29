import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LocationsPageComponent } from './pages/locations-page/locations-page.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';


const routes: Routes = [{
  path: '', component: HomePageComponent,
}, {
  path: 'characters/:page', component: CharactersPageComponent
}, {
  path: 'locations/:page', component: LocationsPageComponent
}, {
  path: 'characters', redirectTo: 'characters/1'
}, {
  path: 'locations', redirectTo: 'locations/1'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
