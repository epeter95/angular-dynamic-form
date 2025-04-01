import {Validators} from "@angular/forms";
import {
  CheckboxControl,
  DropdownControl,
  InputControl,
  RadioControl,
  TextareaControl
} from "../shared/components/dynamic-form/classes/control-classes";
import {SelectAndRadioOptions} from "../shared/components/dynamic-form/classes/control-base";
import {GetFormType} from "../shared/components/dynamic-form/classes/form-base";

export class ExampleForm {
  form = {
    favouriteAnimal: new DropdownControl(
      'favouriteAnimal',
      'cat',
      {
        options: [
          {value: 'cat', label: 'Cat'},
          {value: 'dog', label: 'Dog'},
          {value: 'horse', label: 'Horse'},
          {value: 'capybara', label: 'Capybara'},
        ] as SelectAndRadioOptions[],
        order: 3,
      }),
    gender: new RadioControl(
      'gender',
      '',
      {
        options: [
          {value: 'male', label: 'Férfi'},
          {value: 'female', label: 'Nő'},
          {value: 'other', label: 'Egyéb'}
        ] as SelectAndRadioOptions[],
        order: 3,
      }),
    firstname: new InputControl('firstname', 'Alex', {
      validators: [Validators.required],
      order: 1,
    }),
    lastname: new InputControl('lastname', 'Huge', {
      order: 2,
    }),
    touche: new CheckboxControl('touche', false, {
      validators: [Validators.requiredTrue],
      order: 4,
    }),
    message: new TextareaControl('message', '', {
      order: 2,
    }),
  };

  constructor() {
  }
}

export type ExampleFormType = {
  [K in keyof typeof ExampleForm.prototype.form]: GetFormType<typeof ExampleForm.prototype.form[K]>;
};
