import {Component, Input} from '@angular/core';
import {ControlBase} from "../../../../classes/control-base";
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-dynamic-form-radio',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TranslateModule
  ],
  templateUrl: './dynamic-form-radio.component.html',
  styleUrl: './dynamic-form-radio.component.scss'
})
export class DynamicFormRadioComponent {
  @Input() control!: ControlBase<any>;
  @Input() form!: FormGroup;
}
