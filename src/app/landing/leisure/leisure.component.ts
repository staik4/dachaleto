import { Component, OnInit } from '@angular/core';
import {Leisure, Title} from '../../types';
import {BackendUrlClass, RestService} from '../../services/rest.service';

@Component({
  selector: 'app-leisure',
  templateUrl: './leisure.component.html',
  styleUrls: ['./leisure.component.scss']
})
export class LeisureComponent extends BackendUrlClass implements OnInit {
  title: Title|undefined;
  data: Leisure[]|undefined;
  constructor(
    private rest: RestService
  ) {
    super();
  }
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
