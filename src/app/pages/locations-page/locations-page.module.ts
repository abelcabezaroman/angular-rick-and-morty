import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsPageRoutingModule } from './locations-page-routing.module';
import { LocationsPageComponent } from './locations-page.component';


@NgModule({
  declarations: [LocationsPageComponent],
  imports: [
    CommonModule,
    LocationsPageRoutingModule
  ]
})
export class LocationsPageModule { }
