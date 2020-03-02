import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersPageComponent } from './characters-page.component';

const routes: Routes = [{
  path: ':page', component: CharactersPageComponent,
}, {
  path: '', redirectTo: '1'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersPageRoutingModule {}
