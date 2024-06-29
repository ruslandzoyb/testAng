import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-2way-binding',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponentOfTwoWayBinding {
  childText: string = '';
  @Output() textChanged = new EventEmitter<string>();

  onInputChange(): void {
    this.textChanged.emit(this.childText);
  }
}
