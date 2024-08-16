import {Component, Input} from '@angular/core';
import {ControlBase} from "../../../../classes/control-base";
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-dynamic-form-checkbox',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  templateUrl: './dynamic-form-checkbox.component.html',
  styleUrl: './dynamic-form-checkbox.component.scss'
})
export class DynamicFormCheckboxComponent {
  @Input() control!: ControlBase<any>;
  @Input() form!: FormGroup;
}
