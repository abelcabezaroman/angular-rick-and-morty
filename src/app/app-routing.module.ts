<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
=======
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LocationsPageComponent } from "./pages/locations-page/locations-page.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
>>>>>>> 2435b922232fd5b1f980b01c15e2c670d06708a5

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./pages/home-page/home-page.module").then(m => m.HomePageModule)
  },
  {
    path: "characters",
    loadChildren: () =>
      import("./pages/characters-page/characters-page.module").then(
        m => m.CharactersPageModule
      )
  },
  {
    path: "locations/:page",
    component: LocationsPageComponent
  },

<<<<<<< HEAD
const routes: Routes = [{
  path: '', loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule),
}, {
  path: 'locations', loadChildren: () => import('./pages/locations-page/locations-page.module').then(m => m.LocationsPageModule),
}, 
=======
  {
    path: "locations",
    redirectTo: "locations/1"
  }
>>>>>>> 2435b922232fd5b1f980b01c15e2c670d06708a5
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
