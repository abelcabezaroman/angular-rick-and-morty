import { Component, Input, OnInit } from '@angular/core';
import { FavoritesLocalService } from '../../services/local/favorites-local.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input() characters = [];
  today: number = Date.now();

  constructor(private favoritesLocalService: FavoritesLocalService) { }

  ngOnInit(): void {

  }

  addFavorite(character) {
    this.favoritesLocalService.addNewFavorite(character)
  }


  // ngOnDestroy(){
  //
  // }
  //
  // ngOnChanges(changes){
  //
  // }
}
