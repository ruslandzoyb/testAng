import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public isDisplay = true;
  inFocus: boolean = false;
  title = 'Initial set';

  ngOnInit(): void {}

  onClick() {
    console.log(this.title);
  }

  onClick2() {
    this.title = 'This was changed from click 2';
  }

  onFocus() {
    this.inFocus = true;
  }

  onBlur() {
    this.inFocus = false;
  }

  onInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    // Access the input value
    const inputValue = inputElement.value;

    console.log('Input was triggered:', inputValue);
  }
}
