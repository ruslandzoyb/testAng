import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ClickCounterComponent } from './task1/click-counter/click-counter.component'; 
import { CustomEventComponent } from './task2/custom-event/custom-event.component';
import { PublisherComponent } from './task2/custom-event/publisher/publisher.component';
import { SubscriberComponent } from './task2/custom-event/subscriber/subscriber.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickCounterComponent,
    CustomEventComponent,
    PublisherComponent,
    SubscriberComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
