import {Component, Input, OnInit} from '@angular/core';
import {Cottage} from '../../../types';
import {BackendUrlClass} from '../../../services/rest.service';
import {linkScrollTo} from '../../../helpers/helper';

@Component({
  selector: 'app-cottage-card',
  templateUrl: './cottage-card.component.html',
  styleUrls: ['./cottage-card.component.scss']
})
export class CottageCardComponent extends BackendUrlClass {
  scrollToCottage = linkScrollTo;
  @Input() cottage: Cottage|undefined;
  @Input() index: number|undefined;
  @Input() side: 'right'|'left'|undefined;
}
