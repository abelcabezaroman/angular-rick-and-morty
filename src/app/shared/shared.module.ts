import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PriorityNamePipe } from './pipes/priority-name.pipe';

@NgModule({
  declarations: [GalleryComponent, PaginationComponent, MenuComponent, PriorityNamePipe],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [GalleryComponent, PaginationComponent, MenuComponent]
})
export class SharedModule {}
