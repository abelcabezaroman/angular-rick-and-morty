import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  @Output() character = new EventEmitter();

  myForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      characterName: new FormControl(""),
      characterSpecie: new FormControl(""),
      characterGender: new FormControl(""),
      characterStatus: new FormControl("")
    });
  }

  doSomething() {
    this.character.next(this.myForm.value);
  }
}
