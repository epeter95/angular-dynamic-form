import {ControlBase, SelectOptions} from "../dynamic-form/classes/control-base";
import {CheckboxControl, DropdownControl, TextboxControl} from "../dynamic-form/classes/control-classes";
import {Validators} from "@angular/forms";
import {FormModel, GetFormType, MergeObjectTypes,getControlTypeKeys} from "../dynamic-form/classes/form-base";

export const EXAMPLE_FORM = {
  favouriteAnimal: new DropdownControl(
    'favouriteAnimal',
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
    label: 'Last name',
    order: 2,
    optionalControl: true
  }),
  touche: new CheckboxControl('touche',false,{
    label: 'Accept checkbox',
    validators: [Validators.requiredTrue],
    order: 4,
  }),
};
/*let optionalKeys = Object.keys(EXAMPLE_FORM).filter(key=>EXAMPLE_FORM[key as keyof typeof EXAMPLE_FORM].optionalControl);
let requiredKeys = Object.keys(EXAMPLE_FORM).filter(key=>!EXAMPLE_FORM[key as keyof typeof EXAMPLE_FORM].optionalControl);
// @ts-ignore
export type REQUIREDTYPE = {
  [K in requiredKeys]: GetFormType<typeof requiredKeys[K]>;
};
export type TEST_TYPE = {
  [K in typeof requiredKeys]: GetFormType<typeof EXAMPLE_FORM[K]>;
};*/


/*const keys = Object.keys(EXAMPLE_FORM).filter(key=>EXAMPLE_FORM[key as keyof typeof EXAMPLE_FORM].show);
for(let i=0;i<keys.length;i++){
  let element = EXAMPLE_FORM[keys[i] as keyof typeof EXAMPLE_FORM];
}*/

/*type optionalTestTypes = {
  lastName?: GetFormType<typeof EXAMPLE_FORM['lastName']>
}

type requiredTestTypes = {
  favouriteAnimal: GetFormType<typeof EXAMPLE_FORM['favouriteAnimal']>,
  firstName: GetFormType<typeof EXAMPLE_FORM['firstName']>,
  touche: GetFormType<typeof EXAMPLE_FORM['touche']>
}*/

// Extract the type from EXAMPLE_FORM
/*export type EXAMPLE_FORM_TYPE = MergeObjectTypes<requiredTestTypes, optionalTestTypes>*/

export type EXAMPLE_FORM_TYPE = {
  lastName?: GetFormType<typeof EXAMPLE_FORM['lastName']>,
  favouriteAnimal: GetFormType<typeof EXAMPLE_FORM['favouriteAnimal']>,
  firstName: GetFormType<typeof EXAMPLE_FORM['firstName']>,
  touche: GetFormType<typeof EXAMPLE_FORM['touche']>
}
