import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AsyncPipe} from "@angular/common";
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {FormBase} from "./shared/components/dynamic-form/classes/form-base";
import {SharedModule} from "./shared/shared.module";
import {ExampleForm, ExampleFormType} from "./test-classes/test";

@Component({
  imports: [
    RouterOutlet,
    SharedModule,
    AsyncPipe,
    TranslateModule
  ],
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  myForm = new FormBase<ExampleFormType>( new ExampleForm().form, '');
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
