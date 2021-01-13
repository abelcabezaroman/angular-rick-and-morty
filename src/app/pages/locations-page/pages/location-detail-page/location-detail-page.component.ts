import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocationsService } from 'src/app/shared/services/locations.service';

@Component({
  selector: 'app-location-detail-page',
  templateUrl: './location-detail-page.component.html',
  styleUrls: ['./location-detail-page.component.scss']
})
export class LocationDetailPageComponent implements OnInit {
  location: any;

  constructor(private route: ActivatedRoute, private locationsService: LocationsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const idLocation = params.get('idLocation');
      this.locationsService.getLocation(idLocation).subscribe(location => {
        this.location = location;
      })
    });
  }

}
