import { ValidatorFn} from "@angular/forms";

export enum ControlType{
  dropdown = 'dropdown',
  textbox = 'textbox',
  checkbox = 'checkbox',
  base = 'base',
  input = 'input',
  radio = 'radio',
  datepicker = 'datepicker',
  file = 'file'
}

export enum ControlBaseInputTypes{
  password = 'password',
  number = 'number',
  text = 'text',
  email = 'email'
}

export interface SelectAndRadioOptions{
  key: string;
  value: string;
  infoText: string;
}

export interface ControlInfo{
  text: string;
  params: any;
}

export class ControlBase<T> {
  value: T;
  key: string;
  prefix: string;
  order: number;
  private readonly label: string;
  private readonly placeholder: string;
  info: ControlInfo | null;
  controlType: ControlType = ControlType.base;
  validators: ValidatorFn[] | null;
  inputType: ControlBaseInputTypes | null;
  options: SelectAndRadioOptions[];
  show: boolean;
  constructor(
    key: string,
    value: T,
    optionalParameters: {
      prefix?: string;
      order?: number;
      label?: string;
      placeholder?: string;
      inputType?: ControlBaseInputTypes | null;
      options?: SelectAndRadioOptions[];
      validators?: ValidatorFn[];
      onChange?: (data: any)=>{};
      show?: boolean;
      info?: ControlInfo;
    } = {},
  ) {
    this.value = value;
    this.key = key;
    this.prefix = optionalParameters.prefix || 'COMMON.FORM';
    this.order = optionalParameters.order === undefined ? 1 : optionalParameters.order;
    this.inputType = optionalParameters.inputType || null;
    this.options = optionalParameters.options || [];
    this.validators = optionalParameters.validators || null;
    this.show = optionalParameters.show || true;
    this.label = optionalParameters.label || 'label';
    this.placeholder = optionalParameters.placeholder || 'EMPTY_PLACEHOLDER';
    this.info = optionalParameters.info || null;
  }

  get controlLabel(): string{
    return this.prefix+(this.label != 'EMPTY_LABEL' ? '.'+this.key : '')+'.'+this.label;
  }

  get controlPlaceholder(): string{
    return this.prefix+'.'+(this.placeholder != 'EMPTY_PLACEHOLDER' ? this.key : '')+'.'+this.placeholder;
  }
}
