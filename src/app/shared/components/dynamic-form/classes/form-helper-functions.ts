import { FormControl, FormGroup } from '@angular/forms';
import { ControlBase } from './control-base';
import {
  ControlFullLabelWidthClass,
  ControlType,
  ControlWidthClass,
  CustomFormError,
} from './control-enums';
import { ControlElement, FormBase } from './form-base';

export function getControlErrorState(
  form: FormGroup,
  control: ControlBase<any>
): boolean {
  if (!!control.checkFormError) {
    return (
      ((!!form.errors && form.errors[control.checkFormError]) ||
        form.controls[control.key].invalid) &&
      !form.controls[control.key].hasError('required')
    );
  } else {
    return (
      form.controls[control.key].invalid &&
      !form.controls[control.key].hasError('required')
    );
  }
}

export function getControlErrorStateWithoutForm(control: FormControl): boolean {
  return control.invalid && !control.hasError('required');
}

export function getErrorText(
  form: FormGroup,
  control: ControlBase<any>
): string {
  let text = 'common.form.errors.default';
  if (form.controls[control.key].hasError('pattern')) {
    text = control.errorTexts.pattern;
  } else if (form.controls[control.key].hasError('max')) {
    text = control.errorTexts.maximum;
  } else if (form.controls[control.key].hasError('min')) {
    text = control.errorTexts.minimum;
  } else if (form.controls[control.key].hasError('maxlength')) {
    text = control.errorTexts.maxLength;
  } else if (form.controls[control.key].hasError('minlength')) {
    text = control.errorTexts.minLength;
  } else if (!!control.checkFormError) {
    if (form.hasError(control.checkFormError)) {
      text = control.errorTexts[control.checkFormError];
    }
  }
  return text;
}

export function sameValue(controlKey1: string, controlKey2: string): any {
  return (formGroup: FormGroup) => {
    const control1 = formGroup.get(controlKey1);
    const control2 = formGroup.get(controlKey2);

    if (!control1 || !control2) {
      return null;
    }

    const value1 = control1.value;

    if (!value1) {
      return null;
    }

    const value2 = control2.value;

    if (!value2) {
      return null;
    }
    if (value1 != value2) {
      return { [CustomFormError.mismatch]: true }; // This is our error!
    }

    return null;
  };
}

export function enableAndDisableControls(
  formBase: FormBase<any>,
  enableList: ControlElement[],
  disableList: ControlElement[]
) {
  for (let i = 0; i < enableList.length; i++) {
    const control = enableList[i];
    if (!formBase.formModel[control.key].show) {
      if (formBase.formModel[control.key].controlType == ControlType.label) {
        formBase.formModel[control.key].show = true;
      } else {
        formBase.form.controls[control.key].setValue(
          formBase.formModel[control.key].value
        );
        if (!!control.validators) {
          formBase.form.controls[control.key].setValidators(control.validators);
        }
        formBase.form.controls[control.key].enable();
        formBase.form.controls[control.key].updateValueAndValidity();
        formBase.formModel[control.key].show = true;
      }
    }
  }

  for (let i = 0; i < disableList.length; i++) {
    const control = disableList[i];
    if (formBase.formModel[control.key].show) {
      if (formBase.formModel[control.key].controlType == ControlType.label) {
        formBase.formModel[control.key].show = false;
      } else {
        formBase.form.controls[control.key].reset();
        formBase.form.controls[control.key].disable();
        formBase.form.controls[control.key].updateValueAndValidity();
        formBase.formModel[control.key].show = false;
      }
    }
  }
}

export function showOnlySelectedControls(
  formBase: FormBase<any>,
  controls: ControlElement[]
) {
  const controlKeys = Object.keys(formBase.form.controls);
  for (let i = 0; i < controlKeys.length; i++) {
    const key = controlKeys[i];
    const control = controls.find((control) => control.key === key);
    if (!!control) {
      control.disabled
        ? formBase.form.controls[key].disable({ emitEvent: false })
        : formBase.form.controls[key].enable({ emitEvent: false });
      if (!!control.validators) {
        formBase.form.controls[key].setValidators(control.validators);
      }
      formBase.formModel[key].show = control.show!;
    } else {
      formBase.form.controls[key].disable({ emitEvent: false });
      formBase.formModel[key].show = false;
    }
  }
}

export function getWidthClass(
  widthClass: ControlWidthClass
): ControlFullLabelWidthClass {
  return ControlFullLabelWidthClass[
    widthClass as keyof typeof ControlFullLabelWidthClass
  ];
}
