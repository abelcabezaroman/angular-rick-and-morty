import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  formGroupSearchForm;

  @Output() filterEmitter = new EventEmitter()

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGroupSearchForm = this.formBuilder.group({
      name: ['Rick']
    })
  }

  filter() {
    this.filterEmitter.emit(this.formGroupSearchForm.value);
  }
}
