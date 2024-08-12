// Ez nem interface, hanem class és itt lehetne a controlokból felépíteni a formot valahogy esetleg típussal
import {ControlBase} from "./control-base";
import {FormControl, FormGroup} from "@angular/forms";


export interface FormModel {
  [key: string]: ControlBase<any>;
}

// Helper function to infer form control value types
export type GetFormType<T extends ControlBase<any>> = T extends {valueType: infer V; }
  ? V
  : never;

export interface FormBase{
  formControlList: any;
  form: FormGroup;
  controls: ControlBase<any>[];
}


export type ControlsOf<T extends Record<string, any>> = {
  [K in keyof T]: T[K] extends Record<any, any>
    ? FormGroup<ControlsOf<T[K]>>
    : FormControl<T[K]>;
};
