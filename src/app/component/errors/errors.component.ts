import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from 'src/app/primeng.module';

@Component({
  selector: 'sm-errors',
  standalone: true,
  imports: [CommonModule, PrimengModule, ReactiveFormsModule, FormsModule],
  templateUrl: './errors.component.html',
  styles: [],
})
export class ErrorsComponent implements OnInit {
  @Input() ctrl: FormControl;
  errorList: any = [];

  ngOnInit() {
    console.log(this.ctrl.errors);
    this.errorList = this.ctrl.errors;
  }

  private err_msg: any = {
    required: () => `This field is required`,
    maxlength: (params: any) =>
      `Maximum ${params.requiredLength} characters are allowed`,
    minlength: (params: any) =>
      `Minimum ${params.requiredLength} characters are required`,
    pattern: () => `Invalid format`,
    min: (params: any) => `Minimum amount should be ₹ ${params.min}`,
    whitespace: () => `White spaces are not allowed`,
  };

  showErrors() {
    return this.ctrl && this.ctrl.errors && this.ctrl.touched;
  }

  listOferror() {
    return Object.keys(this.errorList).map((key) =>
      this.err_msg[key](this.ctrl.getError(key))
    );
  }
}
