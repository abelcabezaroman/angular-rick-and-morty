import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../shared/services/characters.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss']
})
export class CharactersPageComponent implements OnInit {
  characters;
  actualPage = 1;
  paginationInfo;
  characterName;

  constructor(private location: Location, private activatedRoute: ActivatedRoute, private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.getPage();
    this.getData(this.actualPage);
  }

  getPage() {
    this.actualPage = Number(this.activatedRoute.snapshot.paramMap.get('page'));
  }

  getData(actualPage) {
    this.location.replaceState('characters/' + actualPage);

    this.charactersService.getData(actualPage).subscribe((res: any) => {
      this.characters = res.results;
      this.paginationInfo = res.info;
    });
  }

  getWithFilter($event){
    
    this.characterName = $event;
    let stringToInsert = "name=" + this.characterName; 
    this.charactersService.getWithFilter(stringToInsert).subscribe((res: any) => {
      this.characters = res.results;
      this.paginationInfo = res.info;
    });
    alert(stringToInsert)
 
  }

}
