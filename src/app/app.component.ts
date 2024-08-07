import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Observable, of} from "rxjs";
import {CheckboxControl, DropdownControl, TextboxControl} from "./dynamic-form/classes/control-classes";
import {ControlBase, ControlBaseInputTypes} from "./dynamic-form/classes/control-base";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DynamicFormComponent} from "./dynamic-form/dynamic-form.component";
import {AsyncPipe} from "@angular/common";
import {quizForm} from "./test-classes/test";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DynamicFormComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'general-forms-pilot';
  quizForm = quizForm;
}
