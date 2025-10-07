import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  registrationForm: FormGroup;
  constructor(private formBuilder: FormBuilder){
   this.registrationForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(25)]],
      age: ['', [Validators.required,Validators.pattern(/^\d+$/), Validators.max(120), Validators.min(0)]],
      gender: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
   })
  }
}
