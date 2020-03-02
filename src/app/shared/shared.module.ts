import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GalleryComponent } from "./components/gallery/gallery.component";
import { PaginationComponent } from "./components/pagination/pagination.component";
import { MenuComponent } from "./components/menu/menu.component";

@NgModule({
<<<<<<< HEAD
  declarations: [GalleryComponent, PaginationComponent, MenuComponent ],
  imports: [
    CommonModule
  ],
=======
  declarations: [GalleryComponent, PaginationComponent, MenuComponent],
  imports: [CommonModule],
>>>>>>> 2435b922232fd5b1f980b01c15e2c670d06708a5
  exports: [GalleryComponent, PaginationComponent, MenuComponent]
})
export class SharedModule {}
