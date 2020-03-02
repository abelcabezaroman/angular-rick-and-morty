import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersPageRoutingModule } from './character-page-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CharactersPageComponent } from './characters-page.component';
import { SearchFormComponent } from './components/search-form/search-form.component';

@NgModule({
  declarations: [CharactersPageComponent, SearchFormComponent],
  imports: [CommonModule,CharactersPageRoutingModule,SharedModule]
})
export class CharactersPageModule { }
