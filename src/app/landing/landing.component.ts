import { Component, OnInit } from '@angular/core';
import {RestService} from '../services/rest.service';
import {Cottage, Map} from '../types';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  cottages: Cottage[]|undefined;
  maps: Map[];
  constructor(
    public rest: RestService
  ) { }

  ngOnInit(): void {
    this.rest.get('cottages')
      .subscribe(response => {
        this.cottages = response;
      });
    this.rest.get('cottage-additional-infos')
      .subscribe((response: any[]) => {
        this.cottages?.forEach(c => {
          c.addInfo = response.filter(i => c.id === i.cottage.id)[0];
        });
      });
    this.rest.get('maps')
      .subscribe((response: any[]) => {
        this.maps = response;
      });
  }

}
