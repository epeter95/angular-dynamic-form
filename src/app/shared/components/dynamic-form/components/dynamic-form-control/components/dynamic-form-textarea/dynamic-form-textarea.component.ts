import { Component, Input } from '@angular/core';
import { ControlBase } from '../../../../classes/control-base';
import { FormGroup } from '@angular/forms';
import {
  getControlErrorState,
  getErrorText,
} from '../../../../classes/form-helper-functions';

@Component({
  selector: 'app-dynamic-form-textarea',
  templateUrl: './dynamic-form-textarea.component.html',
  styleUrl: './dynamic-form-textarea.component.scss',
})
export class DynamicFormTextareaComponent {
  @Input() control!: ControlBase<any>;
  @Input() form!: FormGroup;
  showError: boolean = false;
  protected readonly getControlErrorState = getControlErrorState;
  protected readonly getErrorText = getErrorText;
}
