import { Component, OnInit } from '@angular/core';
import { SpacexService } from './spacex.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  spaceData: any;
  isLoader= true;
  constructor(private spacexService: SpacexService) {
  }

  yearArray = [
    { 'year': 2006 },
    { 'year': 2007 },
    { 'year': 2008 },
    { 'year': 2009 },
    { 'year': 2010 },
    { 'year': 2011 },
    { 'year': 2012 },
    { 'year': 2013 },
    { 'year': 2014 },
    { 'year': 2015 },
    { 'year': 2016 },
    { 'year': 2017 },
    { 'year': 2018 },
    { 'year': 2019 },
    { 'year': 2020 }
  ]
  ngOnInit() {
    this.getSpaceXMissionData();
  }

  getSpaceXMissionData(params?) {
    this.spacexService.getMissionData(environment.baseUrl,params).subscribe(response => {
      this.spaceData = response;
      this.isLoader = false;
    },error=>{      this.isLoader = false;
    })

  }
}
