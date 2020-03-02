import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-search-form",
  templateUrl: "./search-form.component.html",
  styleUrls: ["./search-form.component.scss"]
})
export class SearchComponent implements OnInit {
  @Output() character = new EventEmitter();

  myForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      characterName: new FormControl(""),
      characterSpecie: new FormControl(""),
      characterStatus: new FormControl(""),
      characterGender: new FormControl("")
    });
  }

  doSomething() {
    this.character.next(this.myForm.value);
  }
}
