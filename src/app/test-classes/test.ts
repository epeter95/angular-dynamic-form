import {Observable, of} from "rxjs";
import {ControlBase, ControlBaseInputTypes, FormBase, SelectOptions} from "../dynamic-form/classes/control-base";
import {CheckboxControl, DropdownControl, TextboxControl} from "../dynamic-form/classes/control-classes";
import {FormGroup, Validators} from "@angular/forms";


export const quizForm: FormBase = {
  form: new FormGroup<any>({}),
  controls: getTestControls(),
  submit: () =>{}
}

export function getTestControls(): Observable<ControlBase<any>[]> {
  const controls: ControlBase<any>[] = [
  new DropdownControl(
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
  new TextboxControl('firstName','Alex',{
    label: 'First name',
    validators: [Validators.required],
    order: 1,
  }),
  new TextboxControl('emailAddress','',{
    label: 'Email',
    inputType: ControlBaseInputTypes.email,
    order: 2,
  }),
  new CheckboxControl('touche',false,{
    label: 'Accept checkbox',
    validators: [Validators.requiredTrue],
    order: 4,
  }),
];
return of(controls.sort((a, b) => a.order - b.order));
}
