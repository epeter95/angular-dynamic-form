import { Component, inject, Input, OnInit, ViewChild } from '@angular/core';
import { ControlBase } from '../../../../classes/control-base';
import { FormGroup } from '@angular/forms';
import { DatepickerMode } from './classes/dynamic-form-datepicker-enums';
import { getWidthClass } from '../../../../classes/form-helper-functions';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dynamic-form-datepicker',
  templateUrl: './dynamic-form-datepicker.component.html',
  styleUrl: './dynamic-form-datepicker.component.scss',
})
export class DynamicFormDatepickerComponent implements OnInit {
  @Input() control!: ControlBase<any>;
  @Input() form!: FormGroup;
  @Input() datepickerMode: DatepickerMode = DatepickerMode.date;
  @Input() customId!: string;
  datePipe = inject(DatePipe);
  protected readonly getWidthClass = getWidthClass;

  ngOnInit(): void {
    if (!!this.form.controls[this.control.key].value) {
      this.form.controls[this.control.key].setValue(
        this.datePipe.transform(
          this.form.controls[this.control.key].value,
          // MainConstants.baseDateValueFormat
        ),
        { emitEvent: false }
      );
    }
  }

  formatDate(event: CustomEvent) {
    this.form.controls[this.control.key].setValue(
      this.datePipe.transform(
        event.detail.value,
        // MainConstants.baseDateValueFormat
      )
    );
  }
}
