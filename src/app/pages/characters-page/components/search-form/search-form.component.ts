import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  busqueda: FormGroup;
  @Output() elementEmitter = new EventEmitter();
  
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.busqueda = this.fb.group({
      nombre: new FormControl('',[],[]),
      estado: new FormControl('',[],[]),
      especie: new FormControl('',[],[]),
      tipo: new FormControl('',[],[]),
      genero: new FormControl('',[],[])
    })
  }
  buscar():void{
    var busca = {
      "name": this.busqueda.get('nombre').value,
      "status": this.busqueda.get('estado').value,
      "species": this.busqueda.get('especie').value,
      "type": this.busqueda.get('tipo').value,
      "gender": this.busqueda.get('genero').value
    };
    this.elementEmitter.next(busca);
  }
}
