import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, ValidationErrors} from "@angular/forms";
import {ControlBase} from "./classes/control-base";
import {DynamicFormControlComponent} from "./components/dynamic-form-control/dynamic-form-control.component";
import {ControlsOf, FormModel} from "./classes/form-base";

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [ReactiveFormsModule, DynamicFormControlComponent],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent<T extends Record<string, any>> implements OnInit {
  @Input() formModel!: FormModel;

  formInputs!: ControlBase<any>[];
  form!: FormGroup<ControlsOf<T>>;
  payLoad: any;


  getFormModelKeys(): ControlBase<any>[] {
    return Object.keys(this.formModel).map((k) => this.formModel[k]);
  }

  private toFormGroup(): FormGroup<ControlsOf<T>> {
    const group = Object.keys(this.formModel)
      .map((k) => {
        const field = this.formModel[k];
        return {
          [field.key]: new FormControl<typeof field.value>(
            field.value,
            field.validators
          ),
        };
      })
      .reduce((a, b) => Object.assign(a, b), {});
    return new FormGroup(group as ControlsOf<T>);
  }

  constructor() {}
  ngOnInit(): void {
    this.form = this.toFormGroup();
  }

  onSubmit() {
    console.log('form values: ', this.form.value);
    this.getFormValidationErrors()
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }

  getFormValidationErrors() {
    Object.keys(this.form.controls).forEach(key => {
      const controlErrors: ValidationErrors = this.form.controls[key].errors!;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
        });
      }
    });
  }
}
