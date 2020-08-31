import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CharactersSimpleService {

  constructor(private httpClient: HttpClient) { }

  getDataSimple(){
    return this.httpClient.get('https://rickandmortyapi.com/api/character/');
  }
  //
  // getDataSimple(){
  //   return this.httpClient.get(environment.url + 'character');
  // }

}
