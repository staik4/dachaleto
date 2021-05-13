import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Cottage} from '../../types';
import {LandingComponent} from '../landing.component';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-cottage-description',
  templateUrl: './cottage-description.component.html',
  styleUrls: [
    './cottage-description.component.scss'
  ]
})
export class CottageDescriptionComponent extends LandingComponent implements OnInit, AfterViewInit {
  @Input() cottage: Cottage|undefined;
  additionalInfo: any|undefined;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: [ '<i class="fa-chevron-left"></i>', '<i class="fa-chevron-right></i>"' ],
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
  };
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log(this.cottage);
  }

}
