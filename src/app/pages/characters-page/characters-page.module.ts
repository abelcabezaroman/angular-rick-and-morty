import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersPageComponent } from './characters-page.component';
import { CharactersRoutingModule } from './characters-page-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CharactersPageComponent],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    SharedModule
  ]
})


export class CharactersPageModule {}
