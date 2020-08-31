import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CharactersSimpleService } from "./shared/services/characters-simple.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'rick-and-morty';

  // characters: [];

  constructor(private charactersSimpleService: CharactersSimpleService) {}

  ngOnInit(){
    //
    // this.charactersSimpleService.getDataSimple().subscribe( (res:any) => {
    //   this.characters = res.results;
    //   console.log('##ABEL## >> AppComponent >>  res', res.results);
    // });
    // this.httpClient.get('https://rickandmortyapi.com/api/character/').subscribe( (res:any) => {
    //   console.log('##ABEL## >> AppComponent >>  res', res.results);
    // })

    // fetch('https://rickandmortyapi.com/api/character').then(res => res.json()).then(res => {
    //   console.log('##ABEL## >> AppComponent >>  res', res.results);
    // })
  }
}
