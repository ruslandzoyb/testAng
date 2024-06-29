import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrl: './parent-component.component.css'
})
export class ParentComponentComponent {
  receivedText: string = '';

  onTextChanged(text: string): void {
    this.receivedText = text;
  }
}