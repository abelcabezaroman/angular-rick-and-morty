import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CharactersPageComponent } from "./characters-page.component";

const routes: Routes = [
  {
    path: "",
    component: CharactersPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersPageRoutingModule {}
