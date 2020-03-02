import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsPageComponent } from './locations-page.component';
import { LocationsPageRoutingModule } from './locations-page-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [LocationsPageComponent],
  imports: [
    CommonModule,
    LocationsPageRoutingModule,
    SharedModule
  ]
})
export class LocationsPageModule { }
