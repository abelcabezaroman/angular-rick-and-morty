import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LocationsSimpleService {

  constructor(private httpClient: HttpClient) { }

  getLocations(){
    return this.httpClient.get('https://rickandmortyapi.com/api/location/');
  }
}
