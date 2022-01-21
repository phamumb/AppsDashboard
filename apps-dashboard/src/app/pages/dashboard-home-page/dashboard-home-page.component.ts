import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-home-page',
  templateUrl: './dashboard-home-page.component.html',
  styleUrls: ['./dashboard-home-page.component.scss']
})
export class DashboardHomePageComponent implements OnInit {
  test = [1,2,3,4,5];
  constructor() { }

  ngOnInit(): void {
  }

}
