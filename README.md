# Spacex Angular Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Demo
Click on the following link to see the demo:- https://spacex-angular-project.s3.amazonaws.com/index.html


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## End results:-
![alt text](https://github.com/iankitchauhan/Spacex-Angular-Project/blob/master/screencapture-localhost-4200-2020-08-08-16_03_14.png)
## Index:-
1. Use of Angular material design.
2.Use of Angular properties(@Input and @output) to transfer data from parent   to  child and vice-versa.
3.Implementation of Dependency Injection Concept.
4. generating two component using CLI command
```
ng g c filter
ng g c main-content

```
5.Template view of the main file

```html
<ng-container *ngIf="!isLoader" >
  <div class="container-fluid">
    <h2 class="heading">SpaceX Launched Programs</h2>
  <div class="row">
    <div class="col-md-2">
      <div class="sideBar">
      <app-filter (emitFilter)="getSpaceXMissionData($event)" [yearData]="yearArray" ></app-filter>
      </div>
    </div>
    <div class="col-md-10">
      <app-main-content [mainContent]="launchList" ></app-main-content>
    </div>
    </div>
    </div>
    <p class="footer-text"><b>Developed By:Ankit Kumar</b></p>
  </ng-container>

  <mat-progress-spinner *ngIf="isLoader" style="margin:0 auto;" value="100" size="large" diameter="500"  mode="indeterminate">
  </mat-progress-spinner>
  ```

## Used Packages CLI Commands:-
ng add @angular/material (Add material design).


## Screenshots:-
you can find the screenshots of the project in the same directory

