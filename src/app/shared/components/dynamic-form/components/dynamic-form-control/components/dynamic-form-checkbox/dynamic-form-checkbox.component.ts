import { Component, Input } from '@angular/core';
import { ControlBase } from '../../../../classes/control-base';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-checkbox',
  templateUrl: './dynamic-form-checkbox.component.html',
  styleUrl: './dynamic-form-checkbox.component.scss',
})
export class DynamicFormCheckboxComponent {
  @Input() control!: ControlBase<any>;
  @Input() form!: FormGroup;
  constructor() {}
}
