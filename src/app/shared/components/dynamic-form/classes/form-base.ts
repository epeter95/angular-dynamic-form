// Ez nem interface, hanem class és itt lehetne a controlokból felépíteni a formot valahogy esetleg típussal
import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { ControlType } from './control-enums';
import { ControlBase } from './control-base';

export interface FormModel {
  [key: string]: ControlBase<any>;
}

export interface ControlElement {
  key: string;
  disabled?: boolean;
  show?: boolean;
  validators?: ValidatorFn[];
}

export type ControlsOf<T extends Record<string, any>> = {
  [K in keyof T]: T[K] extends Record<any, any>
    ? FormGroup<ControlsOf<T[K]>>
    : FormControl<T[K]>;
};

export type GetFormType<T extends ControlBase<any>> = T extends {
  valueType: infer V;
}
  ? V
  : never;

export class FormBase<T extends Record<string, any>> {
  id!: string;
  formModel!: FormModel;
  form!: FormGroup<ControlsOf<T>>;

  constructor(
    formModel: FormModel,
    id: string,
    formErrors: ValidatorFn[] = []
  ) {
    this.id = id;
    this.formModel = formModel;
    this.form = this.toFormGroup(formErrors);
  }

  private toFormGroup(formErrors: ValidatorFn[]): FormGroup<ControlsOf<T>> {
    const controls = Object.keys(this.formModel).map((k) => this.formModel[k]);
    const group = controls
      .filter((filterBase) => filterBase.controlType != ControlType.label)
      .map((base) => {
        return {
          [base.key]: new FormControl<typeof base.value>(
            { value: base.value, disabled: base.disabled },
            base.validators
          ),
        };
      })
      .reduce((a, b) => Object.assign(a, b), {});
    return new FormGroup(group as ControlsOf<T>, {
      validators: formErrors,
    });
  }
}
