import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { EpisodesPageComponent } from './episodes-page.component';
import { EpisodesPageRoutingModule } from './episodes-page-routing-module'

@NgModule({
  declarations: [EpisodesPageComponent],
  imports: [CommonModule,EpisodesPageRoutingModule,SharedModule]
})
export class EpisodesPageModule { }
