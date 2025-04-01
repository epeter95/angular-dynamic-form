export interface BaseGeneralData {
  key: string;
  type: BaseGeneralDataType;
  enumValues?: any;
  suffix?: string;
  link?: string;
  linkQueryParams?: { [key: string]: any };
  openConfirm?: boolean;
  hideDataIfNull?: boolean;
  boldLabel?: boolean;
}

export enum BaseGeneralDataType {
  address = 'address',
  date = 'date',
  bankAccount = 'bankAccount',
  string = 'string',
  currency = 'currency',
  enum = 'enum',
  suffix = 'suffix',
  array = 'array',
  link = 'link',
}
function isNull(value: any) {
  return value == null || typeof value === 'undefined';
}
export function objectIsEqual(obj1: any, obj2: any): boolean {
  if (isNull(obj1) && isNull(obj2)) {
    return true;
  }
  if ((isNull(obj1) || isNull(obj2)) && obj1 != obj2) {
    return false;
  }
  let props1 = Object.getOwnPropertyNames(obj1!);
  let props2 = Object.getOwnPropertyNames(obj2!);
  if (props1.length != props2.length) {
    return false;
  }
  for (let i = 0; i < props1.length; i++) {
    let val1 = obj1[props1[i]];
    let val2 = obj2[props1[i]];
    let isObjects = isObject(val1) && isObject(val2);
    if (
      (!isObjects && val1 !== val2) ||
      (isObjects && !objectIsEqual(val1, val2))
    ) {
      return false;
    }
  }
  return true;
}

function isObject(object: any) {
  return object != null && typeof object === 'object';
}
