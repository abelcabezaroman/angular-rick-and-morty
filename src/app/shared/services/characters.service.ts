import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private httpClient: HttpClient) { }

  getData(actualPage){
    return this.httpClient.get(environment.url + 'character/?page=' + actualPage);
  }

  // postDataSimple(){
  //   return this.httpClient.post('https://rickandmortyapi.com/api/character/', {data: 1231});
  // }

}
