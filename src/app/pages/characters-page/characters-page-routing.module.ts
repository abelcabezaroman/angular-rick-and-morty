import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersPageComponent } from './characters-page.component';


const routes: Routes = [{
  path: '', component: CharactersPageComponent
}, {
  path: 'characters/:page', component: CharactersPageComponent
}, {
  path: 'characters', redirectTo: 'characters/1'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersPageRoutingModule {}
