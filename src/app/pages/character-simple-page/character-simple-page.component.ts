import { Component, OnInit } from '@angular/core';
import { take } from "rxjs/operators";
import { CharactersSimpleService } from 'src/app/shared/services/characters-simple.service';

@Component({
  selector: 'app-character-simple-page',
  templateUrl: './character-simple-page.component.html',
  styleUrls: ['./character-simple-page.component.scss']
})
export class CharacterSimplePageComponent implements OnInit {

  characters;

  constructor(private charactersSimpleService: CharactersSimpleService) { }

  ngOnInit(): void {
    this.charactersSimpleService.getCharacters().pipe(take(1)).subscribe((res: any) => {
      this.characters = res.results;
      console.log('##ABEL## >> AppComponent >>  res', res.results);
    });
  }






  
  filterCharacters($event) {
    this.charactersSimpleService.getCharactersFiltered($event.name).pipe(take(1)).subscribe((res: any) => {
      this.characters = res.results;
    })
  }

}
