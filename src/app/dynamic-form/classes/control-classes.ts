import {ControlBase, ControlType, SelectOptions} from "./control-base";

export class InputControl extends ControlBase<string> {
  override controlType = ControlType.input;
}

export class TextboxControl extends ControlBase<string> {
  override controlType = ControlType.textbox;
}

export class DropdownControl extends ControlBase<string> {
  override controlType = ControlType.dropdown;
}

export class CheckboxControl extends ControlBase<boolean> {
  override controlType = ControlType.checkbox;
}
