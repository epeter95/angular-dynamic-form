import {SelectOptions} from "../dynamic-form/classes/control-base";
import {CheckboxControl, DropdownControl, TextboxControl} from "../dynamic-form/classes/control-classes";
import {Validators} from "@angular/forms";
import {GetFormType} from "../dynamic-form/classes/form-base";
// Extract the type from EXAMPLE_FORM
export type EXAMPLE_FORM_TYPE = {
  [K in keyof typeof EXAMPLE_FORM]: GetFormType<typeof EXAMPLE_FORM[K]>;
};
export const EXAMPLE_FORM = {
  favoriteAnimal: new DropdownControl(
    'favoriteAnimal',
    'cat',
    {
      label: 'Favorite Animal',
      options: [
        {key: 'cat', value: 'Cat'},
        {key: 'dog', value: 'Dog'},
        {key: 'horse', value: 'Horse'},
        {key: 'capybara', value: 'Capybara'},
      ] as SelectOptions[],
      order: 3,
    }),
  firstName: new TextboxControl('firstName','Alex',{
    label: 'First name',
    validators: [Validators.required],
    order: 1,
  }),
  lastName: new TextboxControl('lastName','Huge',{
    label: 'First name',
    validators: [Validators.required],
    order: 2,
  }),
  touche: new CheckboxControl('touche',false,{
    label: 'Accept checkbox',
    validators: [Validators.requiredTrue],
    order: 4,
  }),
} as const;
