import {Component, Input} from '@angular/core';
import {ControlBase} from "../../../../classes/control-base";
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-dynamic-form-textarea',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  templateUrl: './dynamic-form-textarea.component.html',
  styleUrl: './dynamic-form-textarea.component.scss'
})
export class DynamicFormTextareaComponent {
  @Input() control!: ControlBase<any>;
  @Input() form!: FormGroup;
}
