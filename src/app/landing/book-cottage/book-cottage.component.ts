import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BackendUrlClass, RestService} from '../../services/rest.service';

@Component({
  selector: 'app-book-cottage',
  templateUrl: './book-cottage.component.html',
  styleUrls: ['./book-cottage.component.scss']
})
export class BookCottageComponent extends BackendUrlClass implements OnInit {
  @Input() cottages;
  title: {title: string}|undefined;
  form: FormGroup;

  constructor(private rest: RestService) {
    super();
    this.form = new FormGroup({
      cottage: new FormControl('0', []),
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
