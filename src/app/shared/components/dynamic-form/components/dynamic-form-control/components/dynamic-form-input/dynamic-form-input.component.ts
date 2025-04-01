import { Component, Input, OnInit } from '@angular/core';
import { ControlBase } from '../../../../classes/control-base';
import { FormGroup } from '@angular/forms';
import { ControlBaseInputTypes } from '../../../../classes/control-enums';
import {
  getControlErrorState,
  getErrorText,
} from '../../../../classes/form-helper-functions';

@Component({
  selector: 'app-dynamic-form-input',
  templateUrl: './dynamic-form-input.component.html',
  styleUrl: './dynamic-form-input.component.scss',
})
export class DynamicFormInputComponent implements OnInit {
  @Input() control!: ControlBase<any>;
  @Input() form!: FormGroup;
  showError: boolean = false;
  protected readonly ControlBaseInputTypes = ControlBaseInputTypes;

  ngOnInit(): void {
    if (!!this.control.currency) {
      this.form.controls[this.control.key].valueChanges.subscribe((value) => {
        this.form.controls[this.control.key].setValue(+value, {
          emitEvent: false,
        });
      });
    }
  }
  protected readonly getControlErrorState = getControlErrorState;
  protected readonly getErrorText = getErrorText;
}
