import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BackendUrlClass, RestService} from '../../services/rest.service';
import {AlertComponent} from '../../parts/alert/alert.service';

const LOCATIONS = {
  1: 'Можайское направление',
  2: 'Дмитровское направление'
};

const COTTAGES = {
  1: 'ТИХОЕ МЕСТО',
  2: 'АЛЫЕ ПАРУСА',
  3: 'СТАРЫЕ ТОВАРИЩИ',
  4: 'ЛЕСНАЯ ХИЖИНА'
};

@Component({
  selector: 'app-book-cottage',
  templateUrl: './book-cottage.component.html',
  styleUrls: ['./book-cottage.component.scss']
})
export class BookCottageComponent extends BackendUrlClass implements OnInit {
  @Input() cottages;
  title: {title: string}|undefined;
  form: FormGroup;
  @ViewChild('alert') alert: AlertComponent;
  constructor(private rest: RestService) {
    super();
    this.form = new FormGroup({
      cottage: new FormControl('0', [Validators.required]),
      location: new FormControl('1', [Validators.required]),
      arrivalDate: new FormControl('', [Validators.required]),
      departureDate: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      number: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      additionalServices: new FormControl([], [])
    });
  }

  ngOnInit(): void {
    this.rest.get('book')
      .subscribe(response => {
        this.title = response;
      });
  }

  resetForm = () => {
    this.form.reset();
  }

  book = () => {
    if (this.form.valid) {
      this.rest.post(`email-leads`, {data: this.form.value})
        .subscribe(res => {
          console.log(res);
          if (res.status === 202 && res.text === 'Accepted') {
            this.rest.post(`requests`, {
              cottage: COTTAGES[this.form.controls.cottage.value],
              location: LOCATIONS[this.form.controls.location.value],
              arrival_date: new Date(this.form.controls.arrivalDate.value).toLocaleDateString(),
              departure_date: new Date(this.form.controls.departureDate.value).toLocaleDateString(),
              name: this.form.controls.name.value,
              number: this.form.controls.number.value,
              email: this.form.controls.email.value
            })
              .subscribe(response => {
                console.log(response);
              });
          } else {
            this.alert.open({
              headerClass: 'bg-danger text-white',
              header: 'Письмо не отправилось!',
              message: 'Извините.',
              buttons: [
                {
                  text: '',
                  cssClass: 'd-none',
                  handler: () => {}
                },
                {
                  text: '',
                  cssClass: 'btn-light',
                  handler: () => {}
                }
              ]
            });
          }
        });

      this.alert.open({
        headerClass: 'bg-viola text-white',
        header: 'Уведомление!',
        message: 'Ваша заявка принята. В ближайшее время с Вами свяжется наш манеджер.',
        buttons: [
          {
            text: '',
            cssClass: 'd-none',
            handler: () => {}
          },
          {
            text: '',
            cssClass: 'btn-light',
            handler: () => {}
          }
        ]
      });
    } else {
      //   this.alert.open({
      //     headerClass: 'bg-danger text-white',
      //     header: 'Уведомление!',
      //     message: 'Пожалуйста заполните все необходимы поля для отправки заявки',
      //     buttons: [
      //       {
      //         text: '',
      //         cssClass: 'd-none',
      //         handler: () => {}
      //       },
      //       {
      //         text: '',
      //         cssClass: 'btn-light',
      //         handler: () => {}
      //       }
      //     ]
      //   });
    }
  }

}
