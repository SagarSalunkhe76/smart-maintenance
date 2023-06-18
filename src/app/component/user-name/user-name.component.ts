import { Component, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from 'src/app/primeng.module';
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  Validator,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'sm-user-name',
  standalone: true,
  imports: [CommonModule, PrimengModule, ReactiveFormsModule],
  templateUrl: './user-name.component.html',
  styles: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UserNameComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => UserNameComponent),
      multi: true,
    },
  ],
})
export class UserNameComponent implements ControlValueAccessor, Validator {
  constructor(private fb: FormBuilder) {}

  user = this.fb.group({
    userId: ['', Validators.required],
    password: ['', Validators.required],
  });

  public onChanges = (_: any) => {};
  public onTouched = (_: any) => {};

  writeValue(value: any): void {
    console.log(value);
    this.user.setValue({
      userId: value ? value : '',
      password: value ? value : '',
    });

    this.user.valueChanges.subscribe((data) => {
      console.log(data);

      this.onChanges(this.user.value);
    });
  }
  registerOnChange(fn: any): void {
    this.onChanges = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  validate(control: AbstractControl) {
    console.log(control.invalid);
    console.log(this.user.get('userId').errors);
    if (this.user.invalid) {
      if (
        this.user.get('userId').errors?.['required'] ||
        this.user.get('password').errors?.['required']
      ) {
        return {
          requied: true,
        };
      }
    }
    return null;
  }
}
