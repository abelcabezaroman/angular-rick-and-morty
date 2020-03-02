import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CharactersPageRoutingModule } from "./character-page-routing.module";
import { SharedModule } from "src/app/shared/shared.module";
import { CharactersPageComponent } from "./characters-page.component";
import { SearchComponent } from "./components/search-form/search-form.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [CharactersPageComponent, SearchComponent],
  imports: [
    CommonModule,
    CharactersPageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CharactersPageModule {}
