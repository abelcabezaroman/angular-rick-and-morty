import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { PaginationComponent } from './shared/components/pagination/pagination.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
=======
import { LocationsPageComponent } from './pages/locations-page/locations-page.component';
>>>>>>> d66d5cc4dd032976e76a9806ea3722019bf7e4bf
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    CharactersPageComponent
=======
    LocationsPageComponent
>>>>>>> d66d5cc4dd032976e76a9806ea3722019bf7e4bf
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
