import { Component, OnInit } from '@angular/core';
import {RestService} from '../../services/rest.service';
import {Banner} from '../../types';
import {LandingComponent} from '../landing.component';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent extends LandingComponent implements OnInit {
  banner: Banner | undefined;

  ngOnInit(): void {
    this.rest.get(`header`).subscribe((response: Banner) => {
      this.banner = response;
    });
  }

}
