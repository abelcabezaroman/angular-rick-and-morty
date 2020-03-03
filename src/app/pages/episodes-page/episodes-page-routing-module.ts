import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EpisodesPageComponent } from './episodes-page.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "1"
  },
  {
    path: ":page",
    component: EpisodesPageComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodesPageRoutingModule {}
