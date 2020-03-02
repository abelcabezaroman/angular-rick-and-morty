<<<<<<< HEAD
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
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
=======
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HttpClientModule } from "@angular/common/http";

import { LocationsPageComponent } from "./pages/locations-page/locations-page.component";

import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [AppComponent, LocationsPageComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, SharedModule],
>>>>>>> 2435b922232fd5b1f980b01c15e2c670d06708a5
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
