
## Syllabus

- [Purpose](#purpose)
- [Task 1](#task1)
- [Task 2](#task2)
- [TestAng Docs ->](#testang)


## Purpose
-> This branch is intended to be used by the Mentor to complete the tasks related to Events Angular topic and by the Mentee to check it out.

## Task1
**Advanced Event Handling with Inputs and Outputs**

### Objective: 
Practice advanced event handling with parent-child component communication.

### Instructions:
1. **Read the articles** on [Event Handling in Angular](https://medium.com/@theriyasharma24/event-handling-in-angular-a5854a61b4a5) and [Angular Event Binding](https://angular.dev/guide/templates/event-binding).

2. **Practice advanced event handling** with parent-child component communication.<br>
   `ng generate component UserDetail`

3. **Task Steps:**<br>
   3.1. `The UserDetailComponent` should accept a user object as an input.<br>

   3.2. Create another component named `UserList` that contains a list of users.<br>
  
   3.3. When a user in the list is clicked, emit an event to display the user details in the `UserDetailComponent`.

4. **Implementation Details:**<br>
   4.1. **UserList Component:**<br>
   4.1.1. Template (HTML):
   ```html
   <ul>
    <li *ngFor="let user of users" (click)="selectUser(user)">
    {{ user.name }}
    </li>
    </ul>
   ```

   4.1.2. Component (TypeScript):
   ```typescript
   import { Component, EventEmitter, Output } from '@angular/core';
   
   @Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html'
    })
    export class UserListComponent {
        users = [
            { name: 'User 1', age: 25 },
            { name: 'User 2', age: 30 },
            { name: 'User 3', age: 35 }
            ];
            
            @Output() userSelected = new EventEmitter<any>();
            
            selectUser(user: any) {
                this.userSelected.emit(user);
                }
            }         
    ```

    4.2. **UserDetail Component:**<br>
    4.2.1. Template (HTML):<br>
    ```html
   <div *ngIf="user">
    <h2>{{ user.name }}'s Details</h2>
    <p>Age: {{ user.age }}</p>
  </div>
    ```
   
   4.2.2. Component (TypeScript):
   ```ts
   import { Component, Input } from '@angular/core';
   
   @Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.component.html'
    })
    
    export class UserDetailComponent {
        @Input() user: any;
    }
    ```
    
    4.3. **Parent Component:**<br>
    4.3.1. Template (HTML):
    ```html
   <app-user-list (userSelected)="onUserSelected($event)">
   </app-user-list>
   <app-user-detail [user]="selectedUser">
   </app-user-detail>
   ```

   4.3.2. Component (TypeScript):
   ```ts
   import { Component } from '@angular/core';
   
   @Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html'
    })
    
    export class ParentComponent {
        selectedUser: any;
        
        onUserSelected(user: any) {
            this.selectedUser = user;
            }
        }
    ```

   4.4. Run the project to see the result:<br>
   `ng serve`


#### **Expected Output**:
When a user in the **UserList** component is clicked, their details should be displayed in the **UserDetail** component.


## Task2
**Custom Event Handling with the Observer Pattern**
-> This branch is intended to be used by the Mentor to complete the tasks related to Events Angular topic and by the Mentee to check it out.

### Objective: 
Implement a simple Observer pattern using Angular services.

### Instructions:
1. Read the articles on [Angular Event Binding](https://angular.dev/guide/templates/event-binding) and the [Observer Pattern](https://refactoring.guru/uk/design-patterns/observer).

2. Create a new Angular service named EventService:<br>
   `ng generate service EventService`

3. **Task Steps:**<br>
   3.1. Implement the `Observer` pattern in the `EventService`.

   3.2. Create two components: `Notifier` and `Listener`.

   3.3. The `Notifier` component should trigger an event using the `EventService`.

   3.4. The `Listener` component should subscribe to this event and update its state accordingly.

4. **Implementation Details:**<br>
   4.1. **EventService:**<br>
   4.1.1. Component (TypeScript):
   ```typescript
   import { Injectable } from '@angular/core';
   import { Subject } from 'rxjs';
   
   @Injectable({
    providedIn: 'root'
    })
    
    export class EventService {
        private eventSubject = new Subject<string>();
        
        emitEvent(message: string) {
            this.eventSubject.next(message);
            }
            
        getEventObservable() {
            return this.eventSubject.asObservable();
            }
        }
    ```

    4.2. **SNotifier Component:**<br>
    4.2.1. Template (HTML):<br>
    ```html
   <button (click)="notify()">Notify</button>
    ```
   
   4.2.2. Component (TypeScript):
   ```ts
   import { Component } from '@angular/core';
   import { EventService } from '../../services/event.service';
   
   @Component({
    selector: 'app-notifier',
    templateUrl: './notifier.component.html'
    })
    
    export class NotifierComponent {
        constructor(private eventService: EventService) {}
        
        notify() {
            this.eventService.emitEvent('Notification triggered!');
            }
        }
    ```
    
    4.3. **Listener Component:**<br>
    4.3.1. Template (HTML):
    ```html
    <p>{{ message }}</p>
   ```
   4.3.2. Component (TypeScript):
   ```ts
   import { Component, OnInit } from '@angular/core';
   import { EventService } from '../../services/event.service';
   
   @Component({
    selector: 'app-listener',
    templateUrl: './listener.component.html'
    })
    
    export class ListenerComponent implements OnInit {
        message = 'No notifications yet';
        
        constructor(private eventService: EventService) {}
        
        ngOnInit(): void {
            this.eventService.getEventObservable().subscribe(msg => {
                this.message = msg;
                });
            }
        }
    ```

   4.4. Run the project to see the result:<br>
   `ng serve`

#### Expected Output:
When the button in the **Notifier** component is clicked, the message in the **Listener** component should update to "Notification triggered!".


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
