import { Component, OnInit } from '@angular/core';
import { LocationsSimpleService } from "../../shared/services/locations-simple.service";

@Component({
  selector: 'app-locations-simple-page',
  templateUrl: './locations-simple-page.component.html',
  styleUrls: ['./locations-simple-page.component.scss']
})
export class LocationsSimplePageComponent implements OnInit {

  locations;

  constructor(private LocationsSimpleService: LocationsSimpleService) { }

  ngOnInit(): void {
    this.LocationsSimpleService.getDataSimple().subscribe( (res:any) => {
      this.locations = res.results;
      console.log('##ABEL## >> AppComponent >>  res', res.results);
    });
  }
}
