
## Syllabus

- [Purpose](#purpose)
- [Task 1](#task1)
- [Task 2](#task2)
- [TestAng Docs ->](#testang)


## Purpose
-> This branch is intended to be used by the Mentee to complete the tasks related to Events Angular topic and by the Mentor to check it out.

## Task 1
**Basic Event Binding**

### Objective: 
Understand and implement basic event binding in Angular.

### Instructions:
1. **Read the articles** on [https://medium.com/@theriyasharma24/event-handling-in-angular-a5854a61b4a5](Event Handling in Angular) and [https://angular.dev/guide/templates/event-binding](Angular Event Binding).

2. **Create a new Angular project** if you don't have one already.<br>
   2.1. Use the Angular CLI to set up the project:<br>
   `cd event-handling-demo`

3. **Task Steps:**<br>
   3.1. Create a new component named ClickCounter<br>
   `ng generate component ClickCounter`

   3.2. In the ClickCounterComponent, create a button that increments a counter every time it is clicked.<br>
   3.3. Display the counter value on the screen.
4. **Implementation Details:**<br>
   4.1. Template (HTML):
   ```html
   <div>
   <h1>Click Counter</h1>
   <button (click)="incrementCounter()">Click me!</button>
   <p>You have clicked the button {{ counter }} times.</p>
   </div>
   ```


   4.2. Component (TypeScript):
   ```ts
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
    ```
       

    4.3. CSS (optional):
   ```css
   button {
    padding: 10px 20px;
    font-size: 16px;
    }
    ```

    4.4. Run the project to see the result:<br>
   `ng serve`

#### **Expected Output**:
When you click the button, the **counter should increment**, and the updated count should be displayed on the screen.


## Task 2
**Custom Event Handling with the Observer Pattern**
-> This branch is intended to be used by the Mentee to complete the tasks and by the Mentor to check

### Objective: 
Understand and implement custom event handling using the Observer pattern.

### Instructions:
1. Read the articles on [https://angular.dev/guide/templates/event-binding](Angular Event Binding) and the [https://refactoring.guru/uk/design-patterns/observer](Observer Pattern).

2. Create a new component named CustomEvent:<br>
   `ng generate component CustomEvent`

3. **Task Steps:**<br>
   3.1. In the CustomEventComponent, create two child components: `Publisher` and `Subscriber`.

   3.2. The `Publisher` component should have a button that emits an event.

   3.3. The `Subscriber` component should listen for this event and update a message accordingly.

4. **Implementation Details:**<br>
   4.1. Publisher Component:<br>
   4.1.1. Template (HTML):
   ```html
   <button (click)="emitEvent()">Emit Event</button>
   ```

   4.1.2. Component (TypeScript):
   ```ts
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
    ```
    
    4.2. **Subscriber Component:**<br>
    4.2.1. Template (HTML):<br>
   ```html
   <p>{{ message }}</p>
   ```

   4.2.2. Component (TypeScript):
   ```ts
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
  ```

  4.3. **Subscriber Component:**<br>
    4.3.1. Template (HTML):
   ```html
   <app-publisher (customEvent)="subscriber.onEventReceived()"></app-publisher>
   <app-subscriber #subscriber></app-subscriber>
   ```

   4.4. Run the project to see the result:<br>
   `ng serve`

#### Expected Output:
When the button in the `Publisher` component is clicked, the message in the `Subscriber` component should update to "Event received!".


# TestAng

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.18.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
