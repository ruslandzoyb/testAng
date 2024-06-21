import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { alphabeticValidator } from '../validators/cutom-validators';

@Component({
  selector: 'app-ilove-you-form',

  templateUrl: './ilove-you-form.component.html',
  styleUrl: './ilove-you-form.component.css'
})
export class ILoveYouFormComponent {
  profileForm = new FormGroup(
    {
    firstName: new FormControl('', [Validators.required, Validators.maxLength(30), alphabeticValidator()]),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    options: new FormControl(''),
    date: new FormControl(''),
  });

  public onSubmit(){
    console.log(this.profileForm.valid);
  }
}
