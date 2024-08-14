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
      if(value=='dog'){
        this.myForm.form.controls.lastName.disable();
        this.myForm.formModel['lastName'].show = false;
      } else {
        this.myForm.form.controls.lastName.enable();
        this.myForm.formModel['lastName'].show = true;
      }
    });
  }

  onSubmit(value: typeof this.myForm.form.value): void{
    console.log('form value: ', value);
  }
}
