import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { CharacterDetailPageComponent } from './pages/characters-page/pages/character-detail-page/character-detail-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LocationsPageComponent } from './pages/locations-page/locations-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'characters', component: CharactersPageComponent},
  {path: 'characters/:idCharacter', component: CharacterDetailPageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'locations', component: LocationsPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
