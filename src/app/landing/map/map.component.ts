import {Component, Input, OnInit} from '@angular/core';
import {BackendUrlClass} from '../../services/rest.service';
import {Map} from '../../types';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent extends BackendUrlClass implements OnInit {
  @Input() maps: Map[];
  constructor(
    public sanitizer: DomSanitizer
  ) {
    super();
  }

  ngOnInit(): void {
  }

}
