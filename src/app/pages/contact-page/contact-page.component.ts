import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  contactForm;

  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['',  [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      description: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(255)]],
    })

    this.contactForm.statusChanges.subscribe((changes) => {
      console.log(changes)
    })

    this.contactForm.valueChanges.subscribe((changes) => {
      console.log(changes)
    })

    this.contactForm.get('name').valueChanges.subscribe(nameChanges => {
      console.log(nameChanges);
    })
  }

  submitContactForm() {
    this.submitted = true;
    console.log(this.contactForm.value);
    console.log(this.contactForm);
  }
}
