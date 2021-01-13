import { Component, OnInit } from '@angular/core';
import { LocationsService } from 'src/app/shared/services/locations.service';

@Component({
  selector: 'app-locations-page',
  templateUrl: './locations-page.component.html',
  styleUrls: ['./locations-page.component.scss']
})
export class LocationsPageComponent implements OnInit {

  locations: any; 
  paginationInfo: any = {};

  constructor(private locationsService: LocationsService) { }

  ngOnInit(): void {
    this.getLocations(1)
  }


  getLocations(page) {
    this.locationsService.getLocations(page).subscribe((res: any) => {
      console.log(res);
      this.locations = res.results;
      this.paginationInfo = { ...res.info, page };
    });
  }

}
