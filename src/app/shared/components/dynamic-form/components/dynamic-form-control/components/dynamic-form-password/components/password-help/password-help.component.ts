import { Component, inject, Input, OnInit } from '@angular/core';
import { PasswordHelpService } from './services/password-help.service';
import { PasswordHelpType } from './classes/password-help';

@Component({
  selector: 'app-password-help',
  templateUrl: './password-help.component.html',
  styleUrl: './password-help.component.scss',
})
export class PasswordHelpComponent implements OnInit {
  passwordService = inject(PasswordHelpService);
  @Input() password!: string;
  helpers = [
    { text: PasswordHelpType.minChar, fullWidth: false },
    { text: PasswordHelpType.maxChar, fullWidth: false },
    { text: PasswordHelpType.lowerCase, fullWidth: false },
    { text: PasswordHelpType.upperCase, fullWidth: false },
    { text: PasswordHelpType.number, fullWidth: false },
    { text: PasswordHelpType.englishLetters, fullWidth: false },
    { text: PasswordHelpType.notSameAsLoginName, fullWidth: true },
  ];

  constructor() {}

  ngOnInit(): void {
  }

  checkHelper(type: PasswordHelpType): boolean {
    if (this.password.length > 0) {
      switch (type) {
        case PasswordHelpType.minChar: {
          return this.password.length >= 8;
        }
        case PasswordHelpType.maxChar: {
          return this.password.length <= 30;
        }
        case PasswordHelpType.lowerCase: {
          const regExp = new RegExp('[a-z]+');
          return regExp.test(this.password);
        }
        case PasswordHelpType.upperCase: {
          const regExp = new RegExp('[A-Z]+');
          return regExp.test(this.password);
        }
        case PasswordHelpType.number: {
          const regExp = new RegExp('[0-9]+');
          return regExp.test(this.password);
        }
        case PasswordHelpType.englishLetters: {
          const regExp = new RegExp('([^a-zA-Z0-9])');
          return !regExp.test(this.password);
        }
        case PasswordHelpType.notSameAsLoginName: {
          return this.passwordService.notSameAsLoginName(this.password);
        }
      }
    } else {
      return false;
    }
  }
}
