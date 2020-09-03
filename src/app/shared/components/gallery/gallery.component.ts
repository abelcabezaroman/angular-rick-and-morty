import { Component, Input, OnInit } from '@angular/core';
import { FavoritesService } from "../../services/local/favorites.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input() characters = [];

  constructor(private favoritesService: FavoritesService) { }

  ngOnInit(): void {

  }

  addNewFavoriteCharacter($event, character) {
    $event.stopPropagation();
    this.favoritesService.addNewFavoriteCharacter(character)
  }


  // ngOnDestroy(){
  //
  // }
  //
  // ngOnChanges(changes){
  //
  // }
}
