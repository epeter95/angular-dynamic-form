import { ValidatorFn} from "@angular/forms";

export enum ControlType{
  dropdown = 'dropdown',
  textbox = 'textbox',
  checkbox = 'checkbox',
  base = 'base',
  input = 'input'
}

export enum ControlBaseInputTypes{
  password = 'password',
  number = 'number',
  text = 'text',
  email = 'email'
}

export interface SelectOptions{
  key: string;
  value: string;
  infoText: string;
}


export class ControlBase<T> {
  value: T;
  key: string;
  label: string;
  order: number;
  controlType: ControlType = ControlType.base;
  validators: ValidatorFn[] | null;
  inputType: ControlBaseInputTypes | null;
  options: SelectOptions[];
  show: boolean;
  optionalControl: boolean;
  constructor(
    key: string,
    value: T,
    optionalParameters: {
      label?: string;
      order?: number;
      inputType?: ControlBaseInputTypes | null;
      options?: SelectOptions[];
      validators?: ValidatorFn[];
      onChange?: (data: any)=>{};
      show?: boolean;
      optionalControl?: boolean;
    } = {},
  ) {
    this.value = value;
    this.key = key;
    this.label = optionalParameters.label || '';
    this.order = optionalParameters.order === undefined ? 1 : optionalParameters.order;
    this.inputType = optionalParameters.inputType || null;
    this.options = optionalParameters.options || [];
    this.validators = optionalParameters.validators || null;
    this.show = optionalParameters.show || true;
    this.optionalControl = optionalParameters.optionalControl || false;
  }
}
