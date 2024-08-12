import {ControlBase, ControlType, SelectOptions} from "./control-base";

export class InputControl extends ControlBase<string> {
  override controlType = ControlType.input;
  valueType!: string|number;
}

export class TextboxControl extends ControlBase<string> {
  override controlType = ControlType.textbox;
  valueType!: string|number;
}

export class DropdownControl extends ControlBase<string> {
  override controlType = ControlType.dropdown;
  valueType!: string|number;
}

export class CheckboxControl extends ControlBase<boolean> {
  override controlType = ControlType.checkbox;
  valueType!: boolean;
}
