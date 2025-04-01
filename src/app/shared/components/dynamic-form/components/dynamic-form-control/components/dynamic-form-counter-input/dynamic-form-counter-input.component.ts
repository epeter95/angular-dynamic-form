import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ControlBaseInputTypes } from '../../../../classes/control-enums';
import { ControlBase } from '../../../../classes/control-base';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dynamic-form-counter-input',
  templateUrl: './dynamic-form-counter-input.component.html',
  styleUrl: './dynamic-form-counter-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicFormCounterInputComponent implements OnInit, OnDestroy {
  @Input() control!: ControlBase<any>;
  @Input() form!: FormGroup;
  protected readonly ControlBaseInputTypes = ControlBaseInputTypes;
  counterSubscription = new Subscription();

  ngOnInit(): void {
    this.counterSubscription = this.form.controls[
      this.control.key
    ].valueChanges.subscribe((value) => {
      if (value > this.control.maximum) {
        this.form.controls[this.control.key].setValue(this.control.maximum, {
          emitEvent: false,
        });
      } else if (value < this.control.minimum) {
        this.form.controls[this.control.key].setValue(this.control.minimum, {
          emitEvent: false,
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.counterSubscription.unsubscribe();
  }

  calculateInput(add: boolean) {
    const currentValue = +this.form.controls[this.control.key].value;
    this.form.controls[this.control.key].setValue(
      currentValue + (add ? 1 : -1)
    );
  }
}
