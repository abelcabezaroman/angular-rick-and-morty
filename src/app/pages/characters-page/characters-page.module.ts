import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CharactersPageComponent} from './characters-page.component';
import {CharactersPageRoutingModule} from './characters-page-routing.module';



@NgModule({
  declarations: [CharactersPageComponent],
  imports: [
    CommonModule,
    CharactersPageRoutingModule
    
  ]
})
export class CharactersPageModule { }
