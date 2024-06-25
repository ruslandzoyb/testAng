import { Component } from '@angular/core';
@Component({
 selector: 'app-click-counter',
 templateUrl: './click-counter.component.html',
 styleUrls: ['./click-counter.component.css']
 })
 export class ClickCounterComponent {
     counter = 0;
     incrementCounter() {
         this.counter++;
         }
     }