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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
