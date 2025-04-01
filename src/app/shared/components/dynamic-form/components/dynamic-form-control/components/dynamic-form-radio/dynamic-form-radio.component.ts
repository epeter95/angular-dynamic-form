import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ControlBase, RadioDisplay } from '../../../../classes/control-base';
import { FormGroup } from '@angular/forms';
import { CommonFormLangName } from '../../../../classes/control-enums';

@Component({
  selector: 'app-dynamic-form-radio',
  templateUrl: './dynamic-form-radio.component.html',
  styleUrl: './dynamic-form-radio.component.scss',
})
export class DynamicFormRadioComponent {
  @Input() control!: ControlBase<any>;
  @Input() form!: FormGroup;
  protected readonly CommonFormLangName = CommonFormLangName;
  protected readonly RadioDisplay = RadioDisplay;
}
