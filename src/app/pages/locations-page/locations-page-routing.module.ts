import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationsPageComponent } from './locations-page.component';


const routes: Routes = [{
  path: ':page', component: LocationsPageComponent,
}, {
    path:'', redirectTo:'1'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationsPageRoutingModule {}