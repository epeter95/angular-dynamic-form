import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DynamicFormComponent} from "./dynamic-form/dynamic-form.component";
import {AsyncPipe} from "@angular/common";
import {EXAMPLE_FORM, EXAMPLE_FORM_TYPE} from "./test-classes/test";
import {FormBase} from "./dynamic-form/classes/form-base";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";

@Component({
  imports: [
    RouterOutlet,
    DynamicFormComponent,
    AsyncPipe,
    TranslateModule
  ],
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  myForm = new FormBase<EXAMPLE_FORM_TYPE>(EXAMPLE_FORM);
  constructor(translate: TranslateService) {
    translate.addLangs(['hu']);
    translate.setDefaultLang('hu');
    translate.use('hu');
  }
  ngOnInit() {
    this.myForm.form.controls.favouriteAnimal.valueChanges.subscribe(value=>{
      if(value=='dog'){
        this.myForm.form.controls.lastname.disable();
        this.myForm.formModel['lastname'].show = false;
      } else {
        this.myForm.form.controls.lastname.enable();
        this.myForm.formModel['lastname'].show = true;
      }
    });
  }

  onSubmit(value: typeof this.myForm.form.value): void{
    console.log('form value: ', value);
  }
}
