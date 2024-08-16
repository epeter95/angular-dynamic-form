import {Component, Input} from '@angular/core';
import {ControlBase} from "../../../../classes/control-base";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-dynamic-form-file-upload',
  standalone: true,
  imports: [],
  templateUrl: './dynamic-form-file-upload.component.html',
  styleUrl: './dynamic-form-file-upload.component.scss'
})
export class DynamicFormFileUploadComponent {
  @Input() control!: ControlBase<any>;
  @Input() form!: FormGroup;
}
