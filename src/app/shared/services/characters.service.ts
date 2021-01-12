import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  getCharacter(idCharacter){
    return this.http.get('https://rickandmortyapi.com/api/character/' + idCharacter);
  }

  getCharacters(page = 1){
    return this.http.get('https://rickandmortyapi.com/api/character?page=' + page);
  }
  
}
