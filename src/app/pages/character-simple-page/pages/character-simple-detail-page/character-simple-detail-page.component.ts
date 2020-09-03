import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CharactersSimpleService } from "../../../../shared/services/characters-simple.service";

@Component({
  selector: 'app-character-simple-detail-page',
  templateUrl: './character-simple-detail-page.component.html',
  styleUrls: ['./character-simple-detail-page.component.scss']
})
export class CharacterSimpleDetailPageComponent implements OnInit {

  character = {};

  constructor(private route: ActivatedRoute, private charactersSimpleService: CharactersSimpleService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idCharacter = params.get('idCharacter');
      this.charactersSimpleService.getCharacter(idCharacter).subscribe(character => {
        this.character = character;
      })
    });
  }

}
