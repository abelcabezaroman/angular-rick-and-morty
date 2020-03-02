import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LocationsPageComponent } from "./pages/locations-page/locations-page.component";
import { CharactersPageComponent } from "./pages/characters-page/characters-page.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./pages/home-page/home-page.module").then(m => m.HomePageModule)
  },
  {
    path: "",
    loadChildren: () =>
      import("./pages/characters-page/characters-page.module").then(
        m => m.CharactersPageModule
      )
  },
  {
    path: "locations/:page",
    component: LocationsPageComponent
  },
  {
    path: "characters",
    redirectTo: "characters/1"
  },
  {
    path: "locations",
    redirectTo: "locations/1"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
