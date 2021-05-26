import {
  AfterViewInit,
  Component, EventEmitter, Inject, Input, NgModule, Output, TemplateRef
} from '@angular/core';
import {CommonModule, DOCUMENT} from '@angular/common';
import {animate, style, transition, trigger} from '@angular/animations';

import {FormsModule} from '@angular/forms';

const animationTime = 200;
export const defaultHeaderClass = 'light';
export interface AlertSelectOption {
  id?: string;
  value?: any;
  text: string;
}

export interface AlertOptions {
  header?: string;
  subheader?: string;
  message?: string;
  inputs?: AlertInput[];
  buttons?: AlertButton[];
  headerClass: string;
}

export interface AlertButton {
  text: string;
  cssClass?: string;
  disabled?: boolean;
  handler?: (data?: any) => any;
}

export interface AlertInput {
  type: 'text' | 'radio' | 'checkbox' | 'number' | 'email' | 'file' | 'textarea' | 'ip' | 'select';
  options?: AlertSelectOption[];
  handler?: (input: any) => any;
  name: string;
  label?: string;
  placeholder?: string;
  value?: any;
  checked?: boolean;
  accept?: string;
  multiple?: boolean;
  helpMessage?: string;
  errorMessage?: string;
}
@Component({
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  selector: 'app-alert',
  animations: [
    trigger('openClose', [
      transition('void => *', [
        style({ opacity: 0, height: 0 }),
        animate(`${animationTime}ms`, style({ opacity: 1, height: '*' })),
      ]),
      transition('* => void', [
        animate(`${animationTime}ms`, style({ opacity: 0, height: 0 })),
      ]),
    ]),
    trigger('showHide', [
      transition('void => *', [
        style({ width: 0, height: 0 }),
        animate(`${animationTime}ms`, style({ width: 'auto', height: 'auto' })),
      ]),
      transition('* => void', [
        animate(`${animationTime}ms`, style({ width: 0, height: 0 })),
      ]),
    ]),
  ],
})
export class AlertComponent implements AfterViewInit {

  @Input() alertHeader: TemplateRef<any>;
  @Input() alertBody: TemplateRef<any>;
  @Input() alertFooter: TemplateRef<any>;
  public options: AlertOptions = {
    buttons: [],
    headerClass: defaultHeaderClass,
  };
  private value: any;
  private output!: { [key: string]: any};

  @Output() shown: EventEmitter<any> = new EventEmitter<any>();
  @Output() hidden: EventEmitter<any> = new EventEmitter<any>();

  public opened?: boolean;
  public id: number = new Date().getTime();

  constructor(
      @Inject(DOCUMENT) private document: Document
  ) {}

  ngAfterViewInit(): void {
  }

  private setOptions = (opts?: AlertOptions) => {
    if (!opts || typeof opts !== 'object') {
      this.options = {
        ...this.options,
        buttons: [],
        inputs: []
      };
      return ;
    }
    this.options = opts;
    if (typeof opts.buttons !== 'object' || !opts.buttons.hasOwnProperty('length')) {
      this.options.buttons = [];
    }
    if (typeof opts.inputs !== 'object' || !opts.inputs.hasOwnProperty('length')) {
      this.options.inputs = [];
    }
  }

  open = (opts?: AlertOptions) => {
    this.setOptions(opts);
    this.document.body.style.overflow = 'hidden';
    this.opened = true;
    this.shown.emit();
  }

  close = () => {
    this.opened = false;
    this.document.body.style.overflow = 'auto';
    setTimeout(() => {
      this.hidden.emit();
    }, animationTime);
  }

  private setOutput = () => {
    if (
      this.options &&
      this.options.inputs
    ) {
      this.output = {};
      this.options.inputs.map((input, index, array) => {
        if (input.type === 'radio') {
          const filteredInputs = array.filter((inp) => {
            return inp.name === input.name && inp.checked;
          });
          this.output[input.name] = filteredInputs.length > 0 ? filteredInputs[0].value : null;
        } else if (input.type === 'file') {
          this.output[input.name] = input.value;
        } else {
          this.output[input.name] = input.value;
        }
      });
    }
  }

  changeInput = ($event: Event, inputsIndex: number) => {
    if (this.options.inputs) {
      const handler = this.options.inputs[inputsIndex].handler;
      if (this.options.inputs[inputsIndex].type === 'file') {
        const target = $event.target as HTMLInputElement;
        this.options.inputs[inputsIndex].value = target.files;
        if (handler) {
          handler(target.files);
        }
        return;
      }
      const name = this.options.inputs[inputsIndex].name;
      this.options.inputs.filter((input) => input.name === name).map((inp, idx) => {
        if (idx !== inputsIndex) {
          inp.checked = false;
        }
      });
      if ($event.target) {
        const target = $event.target as HTMLInputElement;
        this.options.inputs[inputsIndex].value = target.value;
        this.options.inputs[inputsIndex].checked = target.checked;
        if (handler) {
          handler(target.value);
        }
      }
    }
  }

  clickButton = (button: AlertButton) => {
    this.setOutput();
    const result = button.handler ? button.handler(this.output) : true;
    if (result !== false) {
      this.close();
    }
  }

  returnFalse = ($event: Event|null = null) => {
    if ($event) {
      $event.preventDefault();
    }
    return false;
  }

  getInputValue = (input: AlertInput) => {
    if (input.type === 'file') {
      return;
    } else {
      return input.value;
    }
  }

}

@NgModule({
  declarations: [AlertComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [AlertComponent]
})
export class AlertModule {
  constructor() {}
}
