import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-button',
  templateUrl: './input-button-component.component.html',
  styleUrls: ['./input-button-component.component.css']
})
export class InputButtonComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      inputText: ['', Validators.required]
    });
  }
  onButtonClick(): void {
    const inputText = this.form.get('inputText')?.value;
    console.log(inputText);
  }
}
