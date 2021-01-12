import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/shared/services/characters.service';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss']
})
export class CharactersPageComponent implements OnInit {

  characters;
  paginationInfo = {};

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    // fetch('https://rickandmortyapi.com/api/character').then(res => res.json()).then(res =>{
    //   console.log(res)
    // })

    // this.http.get('https://rickandmortyapi.com/api/character').subscribe(res => {
    //   console.log(res);
    // });

    this.getCharacters(1);
  }

  getCharacters(page) {
    this.charactersService.getCharacters(page).subscribe((res: any) => {
      this.characters = res.results;
      this.paginationInfo = { ...res.info, page };
    });
  }

}
