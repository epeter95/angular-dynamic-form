import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ControlBase, ControlInfo } from '../../../../classes/control-base';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-radio-card',
  templateUrl: './dynamic-form-radio-card.component.html',
  styleUrl: './dynamic-form-radio-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicFormRadioCardComponent {
  @Input() control!: ControlBase<any>;
  @Input() form!: FormGroup;

  getOptionInfo(): ControlInfo | undefined {
    return this.control.cardOptions.find(
      (option) => option.value == this.form.controls[this.control.key].value
    )?.info;
  }
}
