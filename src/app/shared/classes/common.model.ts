export type GenericObject = { [key: string]: any };

export const EMAIL_PATTERN: RegExp =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const BUNDLE_ID = 'hu.alfa.mobile2.app.apple';

export enum ToastType {
  success = 'tertiary',
  error = 'danger',
  info = 'dark',
  warning = 'warning',
}

export enum StorageKeys {
  IS_FIRST_RUN_DONE = 'FIRST_RUN_DONE',
  IS_BIOMETRIC_ENABLED = 'IS_BIOMETRIC_ENABLED',
  IS_FIRST_LOGIN = 'IS_FIRST_LOGIN',
  APP_THEME = 'APP_THEME',
}
