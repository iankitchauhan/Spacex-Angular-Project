import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

@Input() mainContent:any;
  constructor() { }

  ngOnInit() {
  }

}
