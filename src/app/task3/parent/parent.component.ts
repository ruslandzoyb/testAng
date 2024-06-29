import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-2way-binding',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponentOfTwoWayBinding {
  receivedText: string = '';

  onTextChanged(text: string): void {
    this.receivedText = text;
  }
}
