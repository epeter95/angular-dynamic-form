import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ControlBase, ControlType} from "../../classes/control-base";
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {DynamicFormCheckboxComponent} from "./components/dynamic-form-checkbox/dynamic-form-checkbox.component";
import {DynamicFormTextareaComponent} from "./components/dynamic-form-textarea/dynamic-form-textarea.component";
import {DynamicFormInputComponent} from "./components/dynamic-form-input/dynamic-form-input.component";
import {DynamicFormSelectComponent} from "./components/dynamic-form-select/dynamic-form-select.component";
import {DynamicFormRadioComponent} from "./components/dynamic-form-radio/dynamic-form-radio.component";
import {DynamicFormDatepickerComponent} from "./components/dynamic-form-datepicker/dynamic-form-datepicker.component";
import {DynamicFormFileUploadComponent} from "./components/dynamic-form-file-upload/dynamic-form-file-upload.component";

@Component({
  selector: 'app-dynamic-form-control',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, TranslateModule, DynamicFormCheckboxComponent, DynamicFormTextareaComponent, DynamicFormInputComponent, DynamicFormSelectComponent, DynamicFormRadioComponent, DynamicFormDatepickerComponent, DynamicFormFileUploadComponent],
  templateUrl: './dynamic-form-control.component.html',
  styleUrl: './dynamic-form-control.component.scss'
})
export class DynamicFormControlComponent implements OnInit{
  // hogy lehet átadni ControlBase<any> ként az extended classoknak???
  @Input() control!: any;
  @Input() form!: FormGroup;

  get isValid() {
    return this.form.controls[this.control.key].valid;
  }
  protected readonly ControlType = ControlType;

  ngOnInit(): void {
  }
}
