import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  formGroupSearchForm;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGroupSearchForm = this.formBuilder.group({
      name: ['Rick']
    })
  }

  filter(){
    console.log('##ABEL## >> SearchFormComponent >>  filter', this.formGroupSearchForm.value);
  }
}
