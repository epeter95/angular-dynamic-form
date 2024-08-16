import {Component, Input} from '@angular/core';
import {ControlBase} from "../../../../classes/control-base";
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-dynamic-form-select',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  templateUrl: './dynamic-form-select.component.html',
  styleUrl: './dynamic-form-select.component.scss'
})
export class DynamicFormSelectComponent {
  @Input() control!: ControlBase<any>;
  @Input() form!: FormGroup;
}
