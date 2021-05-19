import { Component, OnInit } from '@angular/core';
import {Offer} from '../../types';
import {BackendUrlClass, RestService} from "../../services/rest.service";

@Component({
  selector: 'app-what-we-offer',
  templateUrl: './what-we-offer.component.html',
  styleUrls: ['./what-we-offer.component.scss']
})
export class WhatWeOfferComponent extends BackendUrlClass implements OnInit {
  offers: Offer[] | undefined;
  constructor(
    private rest: RestService
  ) {
    super();
  }

  ngOnInit(): void {
    this.rest.get('what-we-offers')
      .subscribe((response) => {
        this.offers = response;
      });
  }

}
