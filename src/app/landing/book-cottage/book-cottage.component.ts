import { Component, OnInit } from '@angular/core';
import {LandingComponent} from '../landing.component';
import {FormControl, FormGroup} from "@angular/forms";
import {RestService} from '../../services/rest.service';

@Component({
  selector: 'app-book-cottage',
  templateUrl: './book-cottage.component.html',
  styleUrls: ['./book-cottage.component.scss']
})
export class BookCottageComponent extends  LandingComponent implements OnInit {
  title: {title: string}|undefined;
  form: FormGroup;

  constructor(rest: RestService) {
    super(rest);
    this.form = new FormGroup({
      cottage: new FormControl('', []),
      location: new FormControl('', []),
      arrivalDate: new FormControl('', []),
      departureDate: new FormControl('', []),
      name: new FormControl('', []),
      telNumber: new FormControl('', []),
      personsNumber: new FormControl('', []),
      additionalServices: new FormControl([], [])
    });
  }
  ngOnInit(): void {
    this.rest.get('book')
      .subscribe(response => {
        this.title = response;
      });
  }

}
