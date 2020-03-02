import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LocationsPageComponent } from './pages/locations-page/locations-page.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { SharedModule } from './shared/shared.module';
import { SearchComponent } from './pages/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LocationsPageComponent,
    CharactersPageComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers:[],
  bootstrap: [AppComponent]
})

export class AppModule {}
