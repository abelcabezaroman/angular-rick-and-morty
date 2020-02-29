import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../../shared/services/locations.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-locations-page',
  templateUrl: './locations-page.component.html',
  styleUrls: ['./locations-page.component.scss']
})
export class LocationsPageComponent implements OnInit {
  locations;
  actualPage = 1;
  paginationInfo;

  constructor(private location: Location, private activatedRoute: ActivatedRoute, private locationsService: LocationsService) { }

  ngOnInit(): void {
    this.getPage();
    this.getData(this.actualPage);
  }

  getPage() {
    this.actualPage = Number(this.activatedRoute.snapshot.paramMap.get('page'));
  }

  getData(actualPage) {
    this.location.replaceState('locations/' + actualPage);

    this.locationsService.getData(actualPage).subscribe((res: any) => {
      this.locations = res.results;
      this.paginationInfo = res.info;
    });
  }

}
