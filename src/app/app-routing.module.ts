import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { CharacterSimplePageComponent } from "./pages/character-simple-page/character-simple-page.component";
import { LocationsSimplePageComponent } from "./pages/locations-simple-page/locations-simple-page.component";
import { FavoritesPageComponent } from "./pages/favorites-page/favorites-page.component";
import { CharacterSimpleDetailPageComponent } from "./pages/character-simple-page/pages/character-simple-detail-page/character-simple-detail-page.component";

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
  path: 'characters/:idCharacter', component: CharacterSimpleDetailPageComponent
}, {
  path: 'locations', component: LocationsSimplePageComponent,
}, {
  path: 'favorites', component: FavoritesPageComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
