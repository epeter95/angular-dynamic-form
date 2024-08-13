import {Component, OnInit, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DynamicFormComponent} from "./dynamic-form/dynamic-form.component";
import {AsyncPipe} from "@angular/common";
import {EXAMPLE_FORM, EXAMPLE_FORM_TYPE} from "./test-classes/test";
import {FormBase} from "./dynamic-form/classes/form-base";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DynamicFormComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  myForm = new FormBase<EXAMPLE_FORM_TYPE>(EXAMPLE_FORM);
  ngOnInit() {
    this.myForm.form.controls.favouriteAnimal.valueChanges.subscribe(value=>{
      console.log('value: ', value);
      if(value=='dog'){
        this.myForm.form.removeControl('lastName');
        this.myForm.formModel['lastName'].show = false;
      } else {
        this.myForm.form.addControl('lastName', new FormControl(this.myForm.formModel['lastName'].value));
        this.myForm.formModel['lastName'].show = true;
      }
    });
  }

  onSubmit(): void{
    console.log('form value: ', this.myForm.form.getRawValue());
  }
}
