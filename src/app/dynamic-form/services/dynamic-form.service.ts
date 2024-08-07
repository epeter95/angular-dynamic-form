import { Injectable } from '@angular/core';
import {ControlBase} from "../classes/control-base";
import {FormControl, FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class DynamicFormService {

  constructor() { }
  toFormGroup(controls: ControlBase<any>[]) {
    const group: any = {};
    controls.forEach((control) => {
    console.log('control.value: ', control.value)
      group[control.key] = !!control.validators
        ? new FormControl<typeof control.value>(control.value, control.validators)
        : new FormControl<typeof control.value>(control.value);
    });
    return new FormGroup(group);
  }
}
