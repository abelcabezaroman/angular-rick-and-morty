import { Component, OnInit } from '@angular/core';
import { FavoritesService } from "../../shared/services/local/favorites.service";

@Component({
  selector: 'app-favorites-characters-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss']
})
export class FavoritesPageComponent implements OnInit {

  favoritesCharacters;
  constructor(private favoritesService: FavoritesService) { }

  ngOnInit(): void {
    this.favoritesCharacters = this.favoritesService.getFavoritesCharacters();
  }

}
