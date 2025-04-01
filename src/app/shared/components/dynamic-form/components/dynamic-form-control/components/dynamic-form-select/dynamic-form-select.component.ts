import { Component, Input, ViewChild } from '@angular/core';
import {
  ControlBase,
  SelectAndRadioOptions,
} from '../../../../classes/control-base';
import { FormGroup } from '@angular/forms';
import { ControlBaseInputTypes } from '../../../../classes/control-enums';

@Component({
  selector: 'app-dynamic-form-select',
  templateUrl: './dynamic-form-select.component.html',
  styleUrl: './dynamic-form-select.component.scss',
})
export class DynamicFormSelectComponent {
  @Input() control!: ControlBase<any>;
  @Input() form!: FormGroup;
  options: SelectAndRadioOptions[] = [];
  protected readonly ControlBaseInputTypes = ControlBaseInputTypes;

  get getControlDisplayString(): string {
    if (!!this.form.controls[this.control.key].value) {
      return this.control.options.find(
        (opt) => this.form.controls[this.control.key].value == opt.value
      )?.label!;
    } else {
      return '';
    }
  }

  setCurrentValue(option: SelectAndRadioOptions) {
    this.form.controls[this.control.key].setValue(option.value);
    this.control.setOptions(this.control.options);
  }

  filterOptions(event: any) {
    const query = event.target.value.toLowerCase();
    const newArray = this.control.options.filter(
      (opt) => opt.label.toLowerCase().indexOf(query) > -1
    );
    this.control.filteredOptions.next(newArray);
  }
}
