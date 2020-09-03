import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Validators } from '@angular/forms';@Injectable({
  providedIn: 'root'
})
export class CharactersSimpleService {

  constructor(private httpClient: HttpClient) { }

  getCharacters(){
    return this.httpClient.get(environment.url + 'character/' );
    // return this.httpClient.post('https://rickandmortyapi.com/api/character/', {created: "2017-11-04T18:48:46.250Z"
    //   episode: (41) ["https://rickandmortyapi.com/api/episode/1", "https://rickandmortyapi.com/api/episode/2", "https://rickandmortyapi.com/api/episode/3", "https://rickandmortyapi.com/api/episode/4", "https://rickandmortyapi.com/api/episode/5", "https://rickandmortyapi.com/api/episode/6", "https://rickandmortyapi.com/api/episode/7", "https://rickandmortyapi.com/api/episode/8", "https://rickandmortyapi.com/api/episode/9", "https://rickandmortyapi.com/api/episode/10", "https://rickandmortyapi.com/api/episode/11", "https://rickandmortyapi.com/api/episode/12", "https://rickandmortyapi.com/api/episode/13", "https://rickandmortyapi.com/api/episode/14", "https://rickandmortyapi.com/api/episode/15", "https://rickandmortyapi.com/api/episode/16", "https://rickandmortyapi.com/api/episode/17", "https://rickandmortyapi.com/api/episode/18", "https://rickandmortyapi.com/api/episode/19", "https://rickandmortyapi.com/api/episode/20", "https://rickandmortyapi.com/api/episode/21", "https://rickandmortyapi.com/api/episode/22", "https://rickandmortyapi.com/api/episode/23", "https://rickandmortyapi.com/api/episode/24", "https://rickandmortyapi.com/api/episode/25", "https://rickandmortyapi.com/api/episode/26", "https://rickandmortyapi.com/api/episode/27", "https://rickandmortyapi.com/api/episode/28", "https://rickandmortyapi.com/api/episode/29", "https://rickandmortyapi.com/api/episode/30", "https://rickandmortyapi.com/api/episode/31", "https://rickandmortyapi.com/api/episode/32", "https://rickandmortyapi.com/api/episode/33", "https://rickandmortyapi.com/api/episode/34", "https://rickandmortyapi.com/api/episode/35", "https://rickandmortyapi.com/api/episode/36", "https://rickandmortyapi.com/api/episode/37", "https://rickandmortyapi.com/api/episode/38", "https://rickandmortyapi.com/api/episode/39", "https://rickandmortyapi.com/api/episode/40", "https://rickandmortyapi.com/api/episode/41"]
    //   gender: "Male"
    //   image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    //   location: {name: "Earth (Replacement Dimension)", url: "https://rickandmortyapi.com/api/location/20"}
    //   name: "Rick Sanchez"
    //   origin: {name: "Earth (C-137)", url: "https://rickandmortyapi.com/api/location/1"}
    //   species: "Human"
    //   status: "Alive"
    //   type: ""
    //   url: "https://rickandmortyapi.com/api/character/1"});
    // post
    // put
    // delete
    // patch
    // get
  }

  getCharacter(idCharacter){
    return this.httpClient.get(environment.url + 'character/' + idCharacter);
  }
  //
  // getDataSimple(){
  //   return this.httpClient.get(environment.url + 'character');
  // }

}
