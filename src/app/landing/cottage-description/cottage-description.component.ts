import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Cottage} from '../../types';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {BackendUrlClass} from '../../services/rest.service';
import {linkScrollTo} from '../../helpers/helper';


@Component({
  selector: 'app-cottage-description',
  templateUrl: './cottage-description.component.html',
  styleUrls: [
    './cottage-description.component.scss'
  ]
})
export class CottageDescriptionComponent extends BackendUrlClass implements OnInit, AfterViewInit {
  @Input() cottage: Cottage|undefined;
  additionalInfo: any|undefined;
  scrollToBook = linkScrollTo;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: [ '<i class="arr-left-carousel arr-carousel"></i>', '<i class="arr-right-carousel arr-carousel"></i>' ],
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
    // console.log(this.cottage);
  }

}
