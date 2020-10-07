import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesLocalService {

  private favorites = [];

  constructor() { }

  addNewFavorite(newFavorite) {
    const isAdded = !!this.favorites.find(el => el.id === newFavorite.id && el.name === newFavorite.name);
    if(!isAdded){
      this.favorites.push(newFavorite);
    }
  }

  getFavorites() {
    return this.favorites;
  }

}
