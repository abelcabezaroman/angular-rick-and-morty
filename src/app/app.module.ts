import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './shared/components/gallery/gallery.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginationComponent } from './shared/components/pagination/pagination.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    CharactersPageComponent
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
