import {Component, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DynamicFormComponent} from "./dynamic-form/dynamic-form.component";
import {AsyncPipe} from "@angular/common";
import {EXAMPLE_FORM, EXAMPLE_FORM_TYPE} from "./test-classes/test";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DynamicFormComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  myForm = EXAMPLE_FORM;

  @ViewChild(DynamicFormComponent) dynamicForm!: DynamicFormComponent<EXAMPLE_FORM_TYPE>;

  ngOnInit() {
    this.dynamicForm.form.value;
/*    this.dynamicForm.form.controls.name; // this will work
    this.dynamicForm.form.controls.age; */// this will throw an error
  }
}
