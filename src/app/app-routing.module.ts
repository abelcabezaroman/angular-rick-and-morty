
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { LocationsPageComponent } from "./pages/locations-page/locations-page.component";


const routes: Routes = [{
  path: '', loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule),
}, {
  path: 'characters/:page', component: CharactersPageComponent
}, {
  path: 'locations', loadChildren: () => import('./pages/locations-page/locations-page.module').then(m => m.LocationsPageModule),
}, {
  path: 'characters', redirectTo: 'characters/1'
}, {
  path: "characters", loadChildren: () => import("./pages/characters-page/characters-page.module").then(m => m.CharactersPageModule),
},
{
  path: "locations/:page",
  component: LocationsPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
