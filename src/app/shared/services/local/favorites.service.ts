import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private favoritesCharacters = [];

  constructor() { }

  addNewFavoriteCharacter(newFavoriteCharacter) {
    this.favoritesCharacters.push(newFavoriteCharacter);
  }

  getFavoritesCharacters() {
    return this.favoritesCharacters;
  }

}
