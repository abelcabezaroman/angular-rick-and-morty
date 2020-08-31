import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersPageComponent } from "./pages/characters-page/characters-page.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { LocationsPageComponent } from "./pages/locations-page/locations-page.component";
import { CharacterSimplePageComponent } from "./pages/character-simple-page/character-simple-page.component";
import { LocationsSimplePageComponent } from "./pages/locations-simple-page/locations-simple-page.component";

// const routes: Routes = [{
//   path: '', loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule),
// }, {
//   path: 'characters', loadChildren: () => import('./pages/characters-page/characters-page.module').then(m => m.CharactersPageModule),
// }, {
//   path: 'locations', loadChildren: () => import('./pages/locations-page/locations-page.module').then(m => m.LocationsPageModule),
// }
// ];


const routes: Routes = [{
  path: '', component: HomePageComponent,
}, {
  path: 'characters', component: CharacterSimplePageComponent
}, {
  path: 'locations', component: LocationsSimplePageComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
