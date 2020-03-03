import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  searchForm: FormGroup;
  @Output() formValuesEmitter = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.searchForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    })
  }

  search(){
    this.formValuesEmitter.next(this.searchForm.value);
  }

}