import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  registrationForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(25)]],
    age: ['', [Validators.required, Validators.min(1), Validators.max(120)]],
    gender: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.registrationForm.valueChanges.subscribe((val) => {
      console.log(val);
    });
  }
  onRegister() {
    console.log(this.registrationForm);
    alert('Registration Success!');
  }

  onLogin() {}
}
