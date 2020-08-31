import { Component, OnInit } from '@angular/core';
import { plus } from "../../shared/utils/plus.util";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('##ABEL## >> HomePageComponent >>  ngOnInit', plus(3,5));
  }


}
