import { Component, Input } from '@angular/core';
import { ControlBase } from '../../../../classes/control-base';
import { FormGroup } from '@angular/forms';
import { CustomFormTemplate } from '../../../../classes/control-enums';

@Component({
  selector: 'app-dynamic-form-label',
  templateUrl: './dynamic-form-label.component.html',
  styleUrl: './dynamic-form-label.component.scss',
})
export class DynamicFormLabelComponent {
  @Input() control!: ControlBase<any>;
  @Input() form!: FormGroup;
  protected readonly CustomFormTemplate = CustomFormTemplate;
}
