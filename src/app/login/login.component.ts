import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { IUser } from '../shared/IUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  isSubmitted = false;
  
  constructor(private authService: AuthService, private formBuilder: FormBuilder) { 
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get formControls() {
    return this.loginForm.controls;
  }

  onSubmit() {
    console.log(this.loginForm.value);

    if (this.loginForm.invalid) {
      return;
    }

    let username = this.loginForm.value.username;
    let password = this.loginForm.value.password;

    if (username != password)
      return;

    this.authService.seConnecter(this.loginForm.value.username);
  }
}
