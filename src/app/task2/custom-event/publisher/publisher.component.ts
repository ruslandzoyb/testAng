import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html'
})
export class PublisherComponent {
  @Output() customEvent = new EventEmitter<void>();

  emitEvent() {
    this.customEvent.emit();
  }
}
