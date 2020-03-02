import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CharactersPageComponent } from "./characters-page.component";
import { CharactersPageRoutingModule } from "./characters-page-routing.module";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [CharactersPageComponent],
  imports: [CommonModule, CharactersPageRoutingModule, SharedModule]
})
export class CharactersPageModule {}
