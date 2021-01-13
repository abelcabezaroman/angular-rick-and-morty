import { Component, Input, OnInit } from '@angular/core';
import { FavoritesLocalService } from '../../services/local/favorites-local.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input() list;
  @Input() flagShowFavoriteButton: boolean = true;

  
  constructor(private favoritesLocalService: FavoritesLocalService) { }

  ngOnInit(): void {
  }

  addOrRemoveToFavorite($event, newFavorite){
    $event.stopPropagation();

    if(this.flagShowFavoriteButton){
      this.favoritesLocalService.addFavorite(newFavorite);
    } else{
      this.favoritesLocalService.removeFavorite(newFavorite);
    }
 
  }

}
