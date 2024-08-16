import {Component, Input} from '@angular/core';
import {FormGroup, FormsModule} from "@angular/forms";
import {ControlBase} from "../../../../classes/control-base";

@Component({
  selector: 'app-dynamic-form-datepicker',
  standalone: true,
    imports: [
        FormsModule
    ],
  templateUrl: './dynamic-form-datepicker.component.html',
  styleUrl: './dynamic-form-datepicker.component.scss'
})
export class DynamicFormDatepickerComponent {
  @Input() control!: ControlBase<any>;
  @Input() form!: FormGroup;
}
