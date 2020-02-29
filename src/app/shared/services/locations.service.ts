import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(private httpClient: HttpClient) { }


  getData(actualPage){
    return this.httpClient.get('https://rickandmortyapi.com/api/location/?page=' + actualPage);
  }
}
