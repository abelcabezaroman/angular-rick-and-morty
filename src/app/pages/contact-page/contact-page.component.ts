import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  contactForm;
  submited = false;

	constructor(private formBuilder: FormBuilder) {
    // Nuestro formulario - sin campos por defecto
    // Podemos meter valores por defecto en las comillas
     this.contactForm = this.formBuilder.group({
       name: ['Abel Cabeza Román', [Validators.required]],
       email: ['contacto@abelcabezaroman.com', [Validators.required, Validators.email]],
       message: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quo atque sunt tempora hic blanditiis eveniet est quae quod. Inventore iste quisquam fuga distinctio eligendi, repellat provident tempora enim in.', [Validators.required, Validators.minLength(55), Validators.maxLength(255)]],
       favorite: [''],
     });
  }

  ngOnInit(): void {
    
  }

  contactMe(){
    this.submited = true;
    console.log(this.contactForm.get('name').value);
    console.log(this.contactForm.value)
  }
}
