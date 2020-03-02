import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppModule } from "src/app/app.module";
import { CharactersPageRoutingModule } from "src/app/pages/characters-page/characters-page-routing-module";
import { SearchFormComponent } from './components/search-form/search-form.component';

@NgModule({
  declarations: [SearchFormComponent],
  imports: [CommonModule, CharactersPageRoutingModule]
})
export class CharactersPageModule {}
