import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnDestroy {
@ViewChild('myButton') myButton: ElementRef;
@ViewChild('message') message: ElementRef;

private clickHandler: EventListenerOrEventListenerObject;

ngAfterViewInit() {
if (this.myButton && this.message) {
this.clickHandler = () => {
this.message.nativeElement.textContent = 'Button was clicked!';
};
this.myButton.nativeElement.addEventListener('click', this.clickHandler);
}
}

ngOnDestroy() {
if (this.myButton && this.clickHandler) {
this.myButton.nativeElement.removeEventListener('click', this.clickHandler);
}
}
}