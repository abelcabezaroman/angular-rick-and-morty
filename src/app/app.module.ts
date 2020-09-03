import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { CharacterSimplePageComponent } from './pages/character-simple-page/character-simple-page.component';
import { LocationsSimplePageComponent } from './pages/locations-simple-page/locations-simple-page.component';
import { FavoritesPageComponent } from "./pages/favorites-page/favorites-page.component";
import { CharacterSimpleDetailPageComponent } from './pages/character-simple-page/pages/character-simple-detail-page/character-simple-detail-page.component';

@NgModule({
  declarations: [AppComponent, CharacterSimplePageComponent, LocationsSimplePageComponent, FavoritesPageComponent, CharacterSimpleDetailPageComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
