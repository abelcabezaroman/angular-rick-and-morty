import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CharactersPageComponent } from './characters-page.component';
import { CharactersPageRoutingModule } from './characters-page-routing-module';
import { SearchFormComponent } from './components/search-form/search-form.component';

@NgModule({
  declarations: [CharactersPageComponent,SearchFormComponent],
  imports: [CommonModule,CharactersPageRoutingModule,SharedModule,ReactiveFormsModule]
})
export class CharactersPageModule { }
