import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase } from '../../../../classes/control-base';
import { ControlBaseInputTypes } from '../../../../classes/control-enums';
import {
  getControlErrorState,
  getErrorText,
} from '../../../../classes/form-helper-functions';

@Component({
  selector: 'app-dynamic-form-password',
  templateUrl: './dynamic-form-password.component.html',
  styleUrl: './dynamic-form-password.component.scss',
})
export class DynamicFormPasswordComponent {
  @Input() control!: ControlBase<any>;
  @Input() form!: FormGroup;
  showError: boolean = false;
  protected readonly ControlBaseInputTypes = ControlBaseInputTypes;

  protected readonly getControlErrorState = getControlErrorState;
  protected readonly getErrorText = getErrorText;
}
