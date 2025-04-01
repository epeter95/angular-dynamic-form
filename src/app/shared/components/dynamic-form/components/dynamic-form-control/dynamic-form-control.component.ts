import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase } from '../../classes/control-base';
import {
  ControlBackground,
  ControlType,
  CustomFormTemplate,
} from '../../classes/control-enums';

@Component({
  selector: 'app-dynamic-form-control',
  templateUrl: './dynamic-form-control.component.html',
  styleUrl: './dynamic-form-control.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicFormControlComponent {
  @Input() control!: ControlBase<any>;
  @Input() form!: FormGroup;

  protected readonly CustomFormTemplate = CustomFormTemplate;
  protected readonly ControlType = ControlType;

  get isFieldRequired() {
    if (this.control.controlType != ControlType.label) {
      return this.form.controls[this.control.key].hasError('required');
    } else {
      return false;
    }
  }

  protected readonly ControlBackground = ControlBackground;
}
