import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators} from "@angular/forms";
import {DynamicFormService} from "./services/dynamic-form.service";
import {ControlBase} from "./classes/control-base";
import {DynamicFormControlComponent} from "./components/dynamic-form-control/dynamic-form-control.component";

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [ReactiveFormsModule, DynamicFormControlComponent],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent implements OnInit {
  //Csak a controls az angular példa, de lehetne valahogy a FormBaseben kigenerálni a controlokból a formot
  @Input() formGroup!: FormGroup;
  @Input() controls: ControlBase<any>[] | null = [];
  form!: FormGroup;
  payLoad = '';

  constructor(private fcs: DynamicFormService) {}
  ngOnInit() {
    this.form = this.fcs.toFormGroup(this.controls as ControlBase<any>[]);
  }
  onSubmit() {
    console.log('form values: ', this.form.value);
    this.getFormValidationErrors()
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }

  getFormValidationErrors() {
    Object.keys(this.form.controls).forEach(key => {
      const controlErrors: ValidationErrors = this.form.controls[key].errors!;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
        });
      }
    });
  }
}
