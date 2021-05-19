import { Component, OnInit } from '@angular/core';
import {BackendUrlClass, RestService} from '../../services/rest.service';
import {Banner} from '../../types';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent extends BackendUrlClass implements OnInit {
  banner: Banner | undefined;
  constructor(
    private rest: RestService
  ) {
    super();
  }

  ngOnInit(): void {
    this.rest.get(`header`).subscribe((response: Banner) => {
      this.banner = response;
    });
  }

}
