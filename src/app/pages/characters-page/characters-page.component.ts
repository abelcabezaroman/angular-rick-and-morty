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
  seekPage = "?page=";
  filterPage = "";
  paginationInfo;

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
    this.seekPage = "?page="+String(actualPage);
    if(this.filterPage !== ""){
      this.seekPage += this.filterPage
    }
    this.charactersService.getData(this.seekPage).subscribe((res: any) => {
      this.characters = res.results;
      this.paginationInfo = res.info;
    });
    
  }

  transformFilterToString($event:Object){
    var filter = "";
    this.actualPage = 1;
    for(const campo in $event){
        if($event[campo] !== "")
        {
            filter += `&${campo}=${$event[campo]}`;    
        }
    }
    this.filterPage = filter;
    this.getData(this.actualPage);
  }
}
