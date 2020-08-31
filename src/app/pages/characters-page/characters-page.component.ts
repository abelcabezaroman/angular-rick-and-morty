import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../shared/services/characters.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { plus } from "../../shared/utils/plus.util";

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss']
})
export class CharactersPageComponent implements OnInit {
  characters;
  actualPage = 1;
  paginationInfo;

  constructor(private location: Location, private activatedRoute: ActivatedRoute, private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.getPage();
    this.getData(this.actualPage);
  }

  getPage() {
    this.actualPage = Number(this.activatedRoute.snapshot.paramMap.get('page'));
    console.log('##ABEL## >> CharactersPageComponent >>  getPage', plus(3, 5));
  }

  getData(actualPage) {
    this.location.replaceState('characters/' + actualPage);

    this.charactersService.getData(actualPage).subscribe((res: any) => {
      this.characters = res.results;
      this.paginationInfo = res.info;
    });
  }


}
