import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {linkScrollTo} from '../../helpers/helper';

export const animationToggleHeight = trigger('toggleHeight', [
  transition('void => *', [
    style({ opacity: 0, height: 0 }),
    animate('.5s', style({ opacity: 1, height: '*' })),
  ]),
  transition('* => void', [
    animate('.5s', style({ opacity: 0, height: 0 })),
  ]),
]);

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [animationToggleHeight]
})
export class HeaderComponent implements OnInit {
  openedNavbar = false;
  constructor() { }

  ngOnInit(): void {

  }

  clickNavItem = (event) => {
    linkScrollTo(event);
  }

  toggleNavBar = () => {
    this.openedNavbar = !this.openedNavbar;
  }
}
