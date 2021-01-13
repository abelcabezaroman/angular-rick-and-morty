import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesLocalService {

  private favorites = [];

  constructor() { }

  addFavorite(newFavorite : any) {
    this.favorites.push(newFavorite);
  }

  getFavorites(){
    return this.favorites;
  }

  removeFavorite(favoriteToRemove){
    const indexToRemove = this.favorites.findIndex(favorite => favorite.id === favoriteToRemove.id);

    if(indexToRemove !== -1){
      this.favorites.splice(indexToRemove, 1);
    }
  }
}
