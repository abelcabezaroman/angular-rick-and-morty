import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  myForm;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.myForm =  this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(3)]),
      password: new FormControl('')
    });

  }


}
