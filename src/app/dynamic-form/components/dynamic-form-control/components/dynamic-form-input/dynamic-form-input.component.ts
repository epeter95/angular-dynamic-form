import {Component, Input} from '@angular/core';
import {ControlBase} from "../../../../classes/control-base";
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-dynamic-form-input',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  templateUrl: './dynamic-form-input.component.html',
  styleUrl: './dynamic-form-input.component.scss'
})
export class DynamicFormInputComponent {
  @Input() control!: ControlBase<any>;
  @Input() form!: FormGroup;
}
