import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersPageComponent } from 'src/app/pages/characters-page/characters-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '1'
  },
  {
    path: ':page',
    component: CharactersPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersPageRoutingModule {}
