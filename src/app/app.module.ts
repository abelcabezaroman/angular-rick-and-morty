import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GalleryComponent } from "./shared/components/gallery/gallery.component";
import { HttpClientModule } from "@angular/common/http";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { PaginationComponent } from "./shared/components/pagination/pagination.component";
import { MenuComponent } from "./shared/components/menu/menu.component";
import { LocationsPageComponent } from "./pages/locations-page/locations-page.component";
import { CharactersPageComponent } from "./pages/characters-page/characters-page.component";

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    PaginationComponent,
    MenuComponent,
    LocationsPageComponent,
    CharactersPageComponent,
    HomePageComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
