import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase } from '../../../../classes/control-base';

@Component({
  selector: 'app-dynamic-form-toggle',
  templateUrl: './dynamic-form-toggle.component.html',
  styleUrl: './dynamic-form-toggle.component.scss',
})
export class DynamicFormToggleComponent {
  @Input() control!: ControlBase<any>;
  @Input() form!: FormGroup;
  constructor() {}
}
