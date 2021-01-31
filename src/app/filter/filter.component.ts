import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() yearData: any;
  @Output() emitFilter = new EventEmitter();
  selectedYear: any;
  selectedLaunch: any;
  selectedLand: any;
  booleanCheck = false;
  booleanLaunch = false;
  booleanLand = false;
  paramsObject = {};

  constructor() { }

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

  // This function is used to show list of successful or unsuccessful launches
  selectSuccessfulLaunch(Slaunch, s) {
    this.booleanLaunch = !this.booleanLaunch;
    if (this.selectedLaunch !== s) {
      this.booleanLaunch = true;
    }
    this.selectedLaunch = s;
    if (this.booleanLaunch) {
      this.paramsObject['launch_success'] = Slaunch;
      this.emitFilter.emit(this.paramsObject);
    } else {
      delete this.paramsObject['launch_success'];
      this.emitFilter.emit(this.paramsObject);

    }
  }


  // This function is used to show list of successful or unsuccessful landings
  successfulLand(Sland, l) {
    this.booleanLand = !this.booleanLand;
    if (this.selectedLand !== l) {
      this.booleanLand = true;
    }
    this.selectedLand = l;
    if (this.booleanLand) {
      this.paramsObject['land_success'] = Sland;
      this.emitFilter.emit(this.paramsObject);
    } else {
      delete this.paramsObject['land_success'];
      this.emitFilter.emit(this.paramsObject);
    }
  }
  ngOnInit() {
  }

}
