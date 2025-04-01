import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {
  DynamicFormCheckboxComponent
} from "./components/dynamic-form/components/dynamic-form-control/components/dynamic-form-checkbox/dynamic-form-checkbox.component";
import {DynamicFormComponent} from "./components/dynamic-form/dynamic-form.component";
import {
  DynamicFormControlComponent
} from "./components/dynamic-form/components/dynamic-form-control/dynamic-form-control.component";
import {
  DynamicFormDatepickerComponent
} from "./components/dynamic-form/components/dynamic-form-control/components/dynamic-form-datepicker/dynamic-form-datepicker.component";
import { DynamicFormRadioComponent } from './components/dynamic-form/components/dynamic-form-control/components/dynamic-form-radio/dynamic-form-radio.component';
import {
  DynamicFormInputComponent
} from "./components/dynamic-form/components/dynamic-form-control/components/dynamic-form-input/dynamic-form-input.component";
import {
  DynamicFormLabelComponent
} from "./components/dynamic-form/components/dynamic-form-control/components/dynamic-form-label/dynamic-form-label.component";
import {
  DynamicFormSelectComponent
} from "./components/dynamic-form/components/dynamic-form-control/components/dynamic-form-select/dynamic-form-select.component";
import {
  DynamicFormTextareaComponent
} from "./components/dynamic-form/components/dynamic-form-control/components/dynamic-form-textarea/dynamic-form-textarea.component";
import {
  DynamicFormToggleComponent
} from "./components/dynamic-form/components/dynamic-form-control/components/dynamic-form-toggle/dynamic-form-toggle.component";
import {
  DynamicFormErrorPopoverComponent
} from "./components/dynamic-form/components/dynamic-form-control/components/dynamic-form-error-popover/dynamic-form-error-popover.component";
import {
  DynamicFormPasswordComponent
} from "./components/dynamic-form/components/dynamic-form-control/components/dynamic-form-password/dynamic-form-password.component";
import {
  PasswordHelpComponent
} from "./components/dynamic-form/components/dynamic-form-control/components/dynamic-form-password/components/password-help/password-help.component";
import {
  DynamicFormRadioCardComponent
} from "./components/dynamic-form/components/dynamic-form-control/components/dynamic-form-radio-card/dynamic-form-radio-card.component";
import {
  DynamicFormCounterInputComponent
} from "./components/dynamic-form/components/dynamic-form-control/components/dynamic-form-counter-input/dynamic-form-counter-input.component";
import {BaseGeneralDataComponent} from "./components/base-general-data/base-general-data.component";
import {BaseModalComponent} from "./components/base-modal/base-modal.component";
import {ConfirmDeleteModalComponent} from "./components/confirm-delete-modal/confirm-delete-modal.component";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    DynamicFormCheckboxComponent,
    DynamicFormComponent,
    DynamicFormControlComponent,
    DynamicFormDatepickerComponent,
    DynamicFormInputComponent,
    DynamicFormLabelComponent,
    DynamicFormRadioComponent,
    DynamicFormSelectComponent,
    DynamicFormTextareaComponent,
    DynamicFormToggleComponent,
    BaseGeneralDataComponent,
    DynamicFormErrorPopoverComponent,
    DynamicFormPasswordComponent,
    PasswordHelpComponent,
    DynamicFormRadioCardComponent,
    DynamicFormCounterInputComponent,
    BaseModalComponent,
    ConfirmDeleteModalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      isolate: false,
    }),
  ],
  exports: [
    CommonModule,
    DynamicFormComponent,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule,
    PasswordHelpComponent,
    DynamicFormToggleComponent,
    DynamicFormCheckboxComponent,
    DynamicFormInputComponent,
    DynamicFormDatepickerComponent,
    DynamicFormRadioComponent,
  ],
  providers: [DatePipe, CurrencyPipe],
})
export class SharedModule {

}
