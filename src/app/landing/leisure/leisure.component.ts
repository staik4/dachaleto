import { Component, OnInit } from '@angular/core';
import {LandingComponent} from '../landing.component';
import {Leisure, Title} from '../../types';

@Component({
  selector: 'app-leisure',
  templateUrl: './leisure.component.html',
  styleUrls: ['./leisure.component.scss']
})
export class LeisureComponent extends LandingComponent implements OnInit {
  title: Title|undefined;
  data: Leisure[]|undefined;
  ngOnInit(): void {
    this.rest.get(`chem-zanyatsa-title`)
      .subscribe((response: Title) => {
        this.title = response;
      });
    this.rest.get(`chem-zanyatsyas`)
      .subscribe((response: Leisure[]) => {
        this.data = response;
      });
  }

}
