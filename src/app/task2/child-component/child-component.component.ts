import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponent {
  @Output() textChanged = new EventEmitter<string>();

  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.textChanged.emit(inputElement.value);
  }
}
