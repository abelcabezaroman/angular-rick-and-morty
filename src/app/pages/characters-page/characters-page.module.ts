import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersPageComponent } from './characters-page.component';
import { CharactersPageRoutingModule } from './characters-page-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CharactersPageComponent, SearchFormComponent],
  imports: [
    CommonModule,
    CharactersPageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CharactersPageModule { }
