import {ControlBase, ControlBaseInputTypes, ControlInfo, ControlType, SelectAndRadioOptions} from "./control-base";
import {ValidatorFn} from "@angular/forms";

export class InputControl extends ControlBase<string> {
  override controlType = ControlType.input;
  valueType?: string|number;
}

export class TextareaControl extends ControlBase<string> {
  override controlType = ControlType.textbox;
  valueType?: string;
}

/*export class TextareaControl extends ControlBase<string> {
  override controlType = ControlType.textbox;
  valueType?: string;
  rows: number;
  cols: number;
  constructor(key: string,
              value: string,
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
                rows?:number;
                cols?:number;
              } = {}) {
    super(key,value,optionalParameters);
    this.rows = optionalParameters.rows || 4;
    this.cols = optionalParameters.cols || 30;
  }
}*/

export class DropdownControl extends ControlBase<string> {
  override controlType = ControlType.dropdown;
  valueType?: string|number;
}

export class CheckboxControl extends ControlBase<boolean> {
  override controlType = ControlType.checkbox;
  valueType?: boolean;
}

export class RadioControl extends ControlBase<string> {
  override controlType = ControlType.radio;
  valueType?: string|number;
}
