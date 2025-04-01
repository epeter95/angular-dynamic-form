import { ControlBase } from './control-base';
import { ControlType } from './control-enums';
export class InputControl extends ControlBase<string> {
  override controlType = ControlType.input;
  override valueType!: string;
}

export class NumberInputControl extends ControlBase<number> {
  override controlType = ControlType.numberInput;
  override valueType!: number;
}

export class CounterInputControl extends ControlBase<number> {
  override controlType = ControlType.counterInput;
  override valueType!: number;
}

export class PasswordControl extends ControlBase<string> {
  override controlType = ControlType.password;
  override valueType!: string;
}

export class EmailControl extends ControlBase<string> {
  override controlType = ControlType.email;
  override valueType!: string;
}

export class TextareaControl extends ControlBase<string> {
  override controlType = ControlType.textbox;
  override valueType!: string;
}

export class LabelControl extends ControlBase<string> {
  override controlType = ControlType.label;
}

export class DropdownControl extends ControlBase<string> {
  override controlType = ControlType.dropdown;
  override valueType!: string;
}

export class CheckboxControl extends ControlBase<boolean> {
  override controlType = ControlType.checkbox;
  override valueType!: boolean;
}

export class ToggleControl extends ControlBase<boolean> {
  override controlType = ControlType.toggle;
  override valueType!: boolean;
}

export class RadioControl extends ControlBase<string> {
  override controlType = ControlType.radio;
  override valueType!: string;
}

export class RadioCardControl extends ControlBase<string> {
  override controlType = ControlType.radioCard;
  override valueType!: string;
}

export class DatepickerControl extends ControlBase<string | null> {
  override controlType = ControlType.datepicker;
  override valueType!: string | null;
}
