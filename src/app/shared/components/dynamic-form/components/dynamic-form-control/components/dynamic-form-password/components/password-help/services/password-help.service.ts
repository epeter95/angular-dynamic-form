import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class PasswordHelpService {
  loginName!: string;
  constructor() {
  }

  setLoginName(name: string) {
    this.loginName = name;
  }

  notSameAsLoginName(password: string): boolean {
    return password != this.loginName;
  }
}
