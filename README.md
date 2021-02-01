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
### desktop view 

![alt text](https://github.com/iankitchauhan/Spacex-Angular-Project/blob/master/desktop-view.PNG)

### Mobile view

![alt text](https://github.com/iankitchauhan/Spacex-Angular-Project/blob/master/mbile.png)

## Index:-
1. Use of Angular material design.
2. Use of Angular properties(@Input and @output) to transfer data from parent to child and vice-versa.
3. Implementation of Dependency Injection Concept.
4. generating two component using CLI command
```
ng g c filter
ng g c main-content

```
5. Template view of the main file

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
6. Media Query  for different screen:-
```
//media query for mobile(less then 1440px and greater than 1024px width)

@media screen and (max-width: 1440px) {
  .card-container {
    flex: 0 0 32% !important;
  }
}
//media query for mobile(greater then 700px width and less then 1024px)
@media screen and (max-width: 1024px) {
  .card-container {
    flex: 0 0 49% !important;
  }
}
//media query for mobile(less then 700px width)
@media screen and (max-width: 700px) {

  .card-container {
    flex: 0 0 100% !important;
  }

}
```
.7 Functions Used:-
```
 //This function is used to show list of number of launches specific to a year
  selectYear(Syear, index) {
    this.booleanCheck = !this.booleanCheck;
    if (this.selectedYear !== index) {
      this.booleanCheck = true;
    }
    this.selectedYear = index;
    this.paramsObject['launch_year'] = Syear;
    if (this.booleanCheck) {
      this.emitFilter.emit(this.paramsObject);
    } else {
      delete this.paramsObject['launch_year'];
      this.emitFilter.emit(this.paramsObject)
    }
  }

  // This function is used for to get the list of launches
  getSpaceXMissionData(params?) {
    this.spacexService.getMissionData(environment.baseUrl,params).subscribe((response:Array<any[]>) => {
      if(response) {
        this.launchList = response;
        this.isLoader = false;
      }
    },error=>{      this.isLoader = false;
    })

  }

```
## Used Packages CLI Commands:-
ng add @angular/material (Add material design).




