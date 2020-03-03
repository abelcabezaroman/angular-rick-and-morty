import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  myForm: FormGroup
  public name:string;
  public status:string[] = ["alive","dead","unknown"];
  public species:string;
  @Output() addElementEmitter = new EventEmitter();
  constructor(private fb: FormBuilder) { }
/* asocimos en ngOnInit el elemento HTML con el objeto FormControl */ 
  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: new FormControl('', [Validators.required], []),
      status: new FormControl('', [Validators.required], []),
      species: new FormControl('', [Validators.required], [])
    })
  }
  pasarParametrosAlPadre(){
    const name =this.myForm.get('name').value;
    const status= this.myForm.get('status').value;
    const species =this.myForm.get('species').value;
    alert(`name ${name} status ${status} species ${species}`);
    //this.addElementEmitter.next-> paso la variable output de hijo a padre
    this.addElementEmitter.next(this.myForm.value);
  }
}
