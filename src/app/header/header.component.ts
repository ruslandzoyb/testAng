import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  //cw#4 task
  // public isDisplay = false;
  //cw#4 task

  //cw#3 task
  //HTML: <div [ngStyle]="currentStyles">
  // currentStyles: Record<string, string> = {};
  // canSave: boolean = true;
  // isUnchanged: any = true;
  // isSpecial: boolean = true;

  // setCurrentStyles() {
  //   // CSS styles: set per current state of component properties
  //   this.currentStyles = {
  //     'font-style': this.canSave ? 'italic' : 'normal',
  //     'font-weight': this.isUnchanged ? 'bold' : 'normal',
  //     'font-size': this.isSpecial ? '24px' : '12px',
  //   };
  // }
  //cw#3 task

  //cw#2 task
  //HTML: <div [ngClass]="currentClasses">
  //   currentClasses: Record<string, boolean> = {};
  //   canSave: boolean = true;
  //   isUnchanged: any = true;
  //   isSpecial: boolean = true;
  // /* . . . */
  // setCurrentClasses() {
  //    // CSS classes: added/removed per current state of component properties
  //   this.currentClasses = {
  //     saveable: this.canSave,
  //     modified: this.isUnchanged,
  //     special: this.isSpecial,
  //   };
  //}
  //cw#2 task

  //cw#1 task
  //HTML: <div [ngClass]="isBlackMode ? 'black-mode' : 'pink-mode'">
  public isBlackMode = true;
  //cw#1 task

  //cw#4 task
  // public isDisplay!: boolean;
  //cw#4 task

  constructor() {}

  //cw#4 task
  // ngOnInit(): void {
  //   this.isDisplay = this.backEndService.isDisplay();
  // }
  //cw#4 task

  //cw#2 task
  // ngOnInit(): void {
  //   this.setCurrentClasses();
  // }
  //cw#2 task

  //cw#3 task
  // ngOnInit(): void {
  //   this.setCurrentStyles();
  // }
  //cw#3 task

  //cw#1 task
  ngOnInit(): void {}
  //cw#1 task

  //cw#1 task
  //HTML: <div [ngClass]="isBlackModeMethod() ? 'black-mode' : 'pink-mode'">
  isBlackModeMethod(): boolean {
    return true;
  }
  //cw#1 task
}
