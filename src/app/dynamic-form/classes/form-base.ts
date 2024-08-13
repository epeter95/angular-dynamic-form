// Ez nem interface, hanem class és itt lehetne a controlokból felépíteni a formot valahogy esetleg típussal
import {ControlBase, ControlType} from "./control-base";
import {FormControl, FormGroup} from "@angular/forms";
import {EXAMPLE_FORM} from "../../test-classes/test";


export interface FormModel {
  [key: string]: ControlBase<any>;
}

export type MergeObjectTypes<A extends Record<string, unknown>, B extends Record<string, unknown>> = {
  [Property in keyof A]: A[keyof A];
} & {
  [Property in keyof B]: B[keyof B];
}

// Helper function to infer form control value types
export type GetFormType<T extends ControlBase<any>> = T extends {valueType: infer V; }
  ? V
  : never;

export function getControlTypeKeys(model: FormModel, optional: boolean): FormModel {
  const keys = Object.keys(model).filter(key=>optional ? model[key as keyof typeof model].optionalControl : !model[key as keyof typeof model].optionalControl);
  let result = {};
  for(const key of keys){
    // @ts-ignore
    result[key] = model[key as keyof typeof model];
  }
  return result;
}

export class FormBase<T extends Record<string, any>>{
  formModel!: FormModel;
  form!: FormGroup<ControlsOf<T>>;
  constructor(formModel: FormModel) {
    this.formModel = formModel;
    this.form = this.toFormGroup();
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
}


export type ControlsOf<T extends Record<string, any>> = {
  [K in keyof T]: T[K] extends Record<any, any>
    ? FormGroup<ControlsOf<T[K]>>
    : FormControl<T[K]>;
};
