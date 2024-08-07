import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ControlBase, ControlType} from "../../classes/control-base";
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-dynamic-form-control',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './dynamic-form-control.component.html',
  styleUrl: './dynamic-form-control.component.scss'
})
export class DynamicFormControlComponent implements OnInit{
  @Input() control!: ControlBase<any>;
  @Input() form!: FormGroup;

  get isValid() {
    return this.form.controls[this.control.key].valid;
  }

  protected readonly ControlType = ControlType;

  ngOnInit(): void {
  }
}
