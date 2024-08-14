import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ReactiveFormsModule, ValidationErrors} from "@angular/forms";
import {ControlBase} from "./classes/control-base";
import {DynamicFormControlComponent} from "./components/dynamic-form-control/dynamic-form-control.component";
import {FormBase} from "./classes/form-base";

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [ReactiveFormsModule, DynamicFormControlComponent],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent implements OnInit {
  @Input() formBase!: FormBase<any>;
  @Output() submitted = new EventEmitter<any>();
  @Input() rawValueNeeded: boolean = false;

  getFormModelKeys(): ControlBase<any>[] {
    return Object.keys(this.formBase.formModel).map((key) => this.formBase.formModel[key]).filter(element=>element.show);
  }
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if(this.formBase.form.valid){
      this.submitted.emit(this.rawValueNeeded ? this.formBase.form.getRawValue() : this.formBase.form.value);
    } else {
      this.getFormValidationErrors();
    }
  }

  getFormValidationErrors() {
    Object.keys(this.formBase.form.controls).forEach(key => {
      const controlErrors: ValidationErrors = this.formBase.form.controls[key].errors!;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
        });
      }
    });
  }
}
