import { Component, OnInit } from '@angular/core';
import {BackendUrlClass, RestService} from '../../services/rest.service';

@Component({
  selector: 'app-how-to-rent',
  templateUrl: './how-to-rent.component.html',
  styleUrls: ['./how-to-rent.component.scss']
})
export class HowToRentComponent extends BackendUrlClass implements OnInit {
  data: any|undefined;
  title: {title: string}|undefined;
  constructor(
    private rest: RestService
  ) {
    super();
  }

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
