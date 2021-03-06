import {AfterViewInit, Component, Input} from '@angular/core';
import {BackendUrlClass, RestService} from '../../services/rest.service';
import {Cottage} from '../../types';

@Component({
  selector: 'app-rent-cottages',
  templateUrl: './rent-cottages.component.html',
  styleUrls: ['./rent-cottages.component.scss']
})
export class RentCottagesComponent extends BackendUrlClass implements AfterViewInit {
  @Input() cottages: Cottage[]|undefined;
  cottagesOnRight: Cottage[]|undefined = [];
  cottagesOnLeft: Cottage[]|undefined = [];
  constructor(public rest: RestService) {
    super();
  }

  ngAfterViewInit(): void {
    const interval = setInterval(() => {
      if (this.cottages) {
        this.cottages?.forEach((c, index) => {
          if (index % 2 === 1 && this.cottagesOnRight &&  this.cottagesOnLeft) {
            this.cottagesOnRight.push(c);
          } else {
            this.cottagesOnLeft?.push(c);
          }
        });
        clearInterval(interval);
      }
    });
  }

}
