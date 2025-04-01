import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-form-error-popover',
  templateUrl: './dynamic-form-error-popover.component.html',
  styleUrl: './dynamic-form-error-popover.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicFormErrorPopoverComponent {
  @Input() text!: string;
}
