import { Component, OnInit } from '@angular/core';
import {LandingComponent} from '../landing.component';
import {Offer} from '../../types';

@Component({
  selector: 'app-what-we-offer',
  templateUrl: './what-we-offer.component.html',
  styleUrls: ['./what-we-offer.component.scss']
})
export class WhatWeOfferComponent extends LandingComponent implements OnInit {
  offers: Offer[] | undefined;

  ngOnInit(): void {
    this.rest.get('what-we-offers')
      .subscribe((response) => {
        this.offers = response;
      });
  }

}
