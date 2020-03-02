import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationsPageComponent } from './locations-page.component';


const routes: Routes = [{
  path: '', component: LocationsPageComponent
}, {
  path: 'locations/:page', component: LocationsPageComponent
}, {
  path: 'locations', redirectTo: 'locations/1'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationsPageRoutingModule {}
