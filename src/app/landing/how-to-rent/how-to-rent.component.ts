import { Component, OnInit } from '@angular/core';
import {LandingComponent} from "../landing.component";

@Component({
  selector: 'app-how-to-rent',
  templateUrl: './how-to-rent.component.html',
  styleUrls: ['./how-to-rent.component.scss']
})
export class HowToRentComponent extends LandingComponent implements OnInit {
  data: any|undefined;
  title: {title: string}|undefined;
  ngOnInit(): void {
    this.rest.get('how-to-rent-cottages')
      .subscribe(response => {
        this.data = response;
      });
    this.rest.get('how-to-rent-cottage-title')
      .subscribe(response => {
        this.title = response;
      });
  }

}
