import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { InputButtonComponent } from './task1/input-button-component/input-button-component.component';
import { ChildComponent } from './task2/child-component/child-component.component';
import { ParentComponentComponent } from './task2/parent-component/parent-component.component';
import { ChildComponentOfTwoWayBinding } from './task3/child/child.component';
import { ParentComponentOfTwoWayBinding } from './task3/parent/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    InputButtonComponent,
    ChildComponent,
    ParentComponentComponent,
    ChildComponentOfTwoWayBinding,
    ParentComponentOfTwoWayBinding
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
