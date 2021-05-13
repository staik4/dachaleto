import {Component, Input, OnInit} from '@angular/core';
import {Cottage} from '../../../types';
import {LandingComponent} from '../../landing.component';

@Component({
  selector: 'app-cottage-card',
  templateUrl: './cottage-card.component.html',
  styleUrls: ['./cottage-card.component.scss']
})
export class CottageCardComponent extends LandingComponent implements OnInit {
  @Input() cottage: Cottage|undefined;
  @Input() index: number|undefined;
  @Input() side: 'right'|'left'|undefined;
}
