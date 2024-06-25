import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html'
})
export class SubscriberComponent implements OnInit {
  message = 'No event received';

  ngOnInit(): void {}

  onEventReceived() {
    this.message = 'Event received!';
  }
}
