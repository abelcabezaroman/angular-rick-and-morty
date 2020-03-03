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

  constructor(private location: Location, private activatedRoute: ActivatedRoute, private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.getPage();
    this.getData(this.transformFiltersToString(this.actualPage,null));
  }

  getPage() {
    //coge de la ruta el param page y lo iguala a this.actualPage
    this.actualPage = Number(this.activatedRoute.snapshot.paramMap.get('page'));
  }

  getData(actualPage) {
    
    this.charactersService.getData(actualPage).subscribe((res: any) => {
      this.characters = res.results;
      this.paginationInfo = res.info;
    });
  }
  changePage(actualPage){
    console.log("actualPage is "+actualPage);
    //reemplazar la ruta a characters/numero
    this.location.replaceState('characters/' + actualPage);
    let url= this.transformFiltersToString(actualPage,null);
    this.getData(url);
  }
//Método al que llamamos desde el characters-page.html para pasarle el output 
//que recibimos del componente hijo Formulario
addFilters($event){
 
  let url= this.transformFiltersToString(this.actualPage,$event);
  console.log(url);
  this.getData(url);

}
//Crear funcion que dado el objeto 
transformFiltersToString(actualPage, data=null){
  console.log(actualPage,data);
  let filterString='page=' + actualPage;
  if(data!=null){
    if(data.name){
    filterString +='&name='+data.name;
  }
  if(data.status){
    filterString +='&status='+data.status;
  } 
  if(data.species){
    filterString +='&species='+data.species;
  } 
}
  //console.log("filterString es "+filterString)
  return filterString;
 /*  {
    name:'Rick',
    status:'Alive'
  }
  '?page=1&name=Rick&status=Alive' */
}
}
