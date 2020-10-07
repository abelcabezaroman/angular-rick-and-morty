import { Component, OnInit } from '@angular/core';
import { FavoritesLocalService } from 'src/app/shared/services/local/favorites-local.service';

@Component({
  selector: 'app-favorites-characters-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss']
})
export class FavoritesPageComponent implements OnInit {

  favorites;
  constructor(private favoritesLocalService: FavoritesLocalService) { }

  ngOnInit(): void {
    this.favorites = this.favoritesLocalService.getFavorites();
  }

}
