import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { ControlBase } from './classes/control-base';
import { FormBase } from './classes/form-base';
import { ControlColor } from './classes/control-enums';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicFormComponent {
  @Input({ required: true }) formBase!: FormBase<any>;
  @Output() submitted = new EventEmitter<any>();
  @Input() rawValueNeeded: boolean = false;
  @Input() submitButtonNeeded: boolean = true;
  @Input() submitButtonText = 'common.form.saveButton';
  @Input() submitButtonIcon!: string;
  @Input() submitButtonColor = ControlColor.primary;
  @Input() extraDisabledCondition: boolean = false;

  getFormModelKeys(): ControlBase<any>[] {
    return Object.keys(this.formBase.formModel)
      .map((key) => this.formBase.formModel[key])
      .filter((element) => element.show)
      .sort((a, b) => a.order - b.order);
  }

  onSubmit() {
    if (this.formBase.form.valid) {
      this.submitted.emit(
        this.rawValueNeeded
          ? this.formBase.form.getRawValue()
          : this.formBase.form.value
      );
    } else {
      this.getFormValidationErrors();
    }
  }

  getFormValidationErrors() {
    Object.keys(this.formBase.form.controls).forEach((key) => {
      const controlErrors: ValidationErrors =
        this.formBase.form.controls[key].errors!;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach((keyError) => {
          console.log(
            'Key control: ' + key + ', keyError: ' + keyError + ', err value: ',
            controlErrors[keyError]
          );
        });
      }
    });
  }
}
