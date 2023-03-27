import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  isLoggingIn = false;

  onLoginClick() {
    this.isLoggingIn = true;

    this.authService
      .signIn({
        email: this.form.value.email,
        password: this.form.value.password,
      })
      .subscribe(
        () => {
          this.router.navigate(['home']);
        },
        (error: any) => {}
      );
  }
  form!: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: [''],
    });
  }
}
