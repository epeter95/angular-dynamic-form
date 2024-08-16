import {SelectAndRadioOptions} from "../dynamic-form/classes/control-base";
import {CheckboxControl, DropdownControl, InputControl, RadioControl, TextareaControl} from "../dynamic-form/classes/control-classes";
import {Validators} from "@angular/forms";
import {GetFormType} from "../dynamic-form/classes/form-base";

export const EXAMPLE_FORM = {
  favouriteAnimal: new DropdownControl(
    'favouriteAnimal',
    'cat',
    {
      options: [
        {key: 'cat', value: 'Cat'},
        {key: 'dog', value: 'Dog'},
        {key: 'horse', value: 'Horse'},
        {key: 'capybara', value: 'Capybara'},
      ] as SelectAndRadioOptions[],
      order: 3,
    }),
  gender: new RadioControl(
    'gender',
    '',
    {
      options: [
        {key: 'male', value: 'Férfi'},
        {key: 'female', value: 'Nő'},
        {key: 'other', value: 'Egyéb'}
      ] as SelectAndRadioOptions[],
      order: 3,
    }),
  firstname: new InputControl('firstname','Alex',{
    validators: [Validators.required],
    order: 1,
  }),
  lastname: new InputControl('lastname','Huge',{
    order: 2,
  }),
  touche: new CheckboxControl('touche',false,{
    validators: [Validators.requiredTrue],
    order: 4,
  }),
  message: new TextareaControl('message','',{
    order: 2,
  }),
};

export type EXAMPLE_FORM_TYPE = {
  [K in keyof typeof EXAMPLE_FORM]: GetFormType<typeof EXAMPLE_FORM[K]>;
};


// add/remove controlos megoldáshoz, nics kész, legalsó ami működik!!
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

/*export type EXAMPLE_FORM_TYPE = {
  lastName?: GetFormType<typeof EXAMPLE_FORM['lastName']>,
  favouriteAnimal: GetFormType<typeof EXAMPLE_FORM['favouriteAnimal']>,
  firstName: GetFormType<typeof EXAMPLE_FORM['firstName']>,
  touche: GetFormType<typeof EXAMPLE_FORM['touche']>
}*/
