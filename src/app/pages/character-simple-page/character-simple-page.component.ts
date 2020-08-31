import { Component, OnInit } from '@angular/core';
import { CharactersSimpleService } from "../../shared/services/characters-simple.service";

@Component({
  selector: 'app-character-simple-page',
  templateUrl: './character-simple-page.component.html',
  styleUrls: ['./character-simple-page.component.scss']
})
export class CharacterSimplePageComponent implements OnInit {

  characters;

  constructor(private charactersSimpleService: CharactersSimpleService) { }

  ngOnInit(): void {
    this.charactersSimpleService.getDataSimple().subscribe( (res:any) => {
      this.characters = res.results;
      console.log('##ABEL## >> AppComponent >>  res', res.results);
    });
  }

}
