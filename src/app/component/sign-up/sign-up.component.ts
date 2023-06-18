import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from 'src/app/primeng.module';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserNameComponent } from '../user-name/user-name.component';
import { PasswordComponent } from '../password/password.component';
import { ErrorsComponent } from '../errors/errors.component';

@Component({
  selector: 'sm-sign-up',
  standalone: true,
  imports: [
    CommonModule,
    PrimengModule,
    ReactiveFormsModule,
    FormsModule,
    UserNameComponent,
    PasswordComponent,
    ErrorsComponent,
  ],
  templateUrl: './sign-up.component.html',
  styles: [],
})
export class SignUpComponent {
  constructor(private fb: FormBuilder) {}

  signupForm: FormGroup = this.fb.group({
    FirstName: ['', [Validators.required]],
    LastName: ['', Validators.required],
    UserName: ['']
  });

  convertToFormControl(absCtrl: AbstractControl | null): FormControl {
    const ctrl = absCtrl as FormControl;
    return ctrl;
  }

  create() {
    console.log(this.signupForm.value);
  }
}
