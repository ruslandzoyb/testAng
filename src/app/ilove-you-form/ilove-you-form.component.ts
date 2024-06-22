import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { alphabeticValidator, phoneValidator, dateValidator, timeValidator } from '../validators/custom-validators';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'app-ilove-you-form',
  templateUrl: './ilove-you-form.component.html',
  styleUrls: ['./ilove-you-form.component.css'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'uk-UA' }
  ]
})
export class ILoveYouFormComponent {
  minDate: Date;

  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.maxLength(30), alphabeticValidator()]),
    lastName: new FormControl('', [Validators.required, Validators.maxLength(50), alphabeticValidator()]),
    email: new FormControl(''),
    phone: new FormControl('', [Validators.required, phoneValidator()]),
    options: new FormControl(''),
    date: new FormControl('', [Validators.required, dateValidator()]),
    time: new FormControl('', [Validators.required])
  });

  constructor() {
    this.minDate = new Date();  // Set minDate to the current date

    // Add the time validator after the form controls are initialized
    this.profileForm.get('date')?.valueChanges.subscribe(() => {
      this.profileForm.get('time')?.updateValueAndValidity();
    });
    this.profileForm.get('time')?.setValidators([Validators.required, timeValidator(this.profileForm.get('date') as AbstractControl)]);
  }

  public onSubmit() {
    console.log(this.profileForm.valid);
    console.log(this.profileForm.value);
  }
}
