import {inject, Injectable} from '@angular/core';
import {BaseGeneralData, BaseGeneralDataType,} from '../classes/base-general-data';
import {CurrencyPipe, DatePipe} from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class BaseGeneralDataService {
  datePipe = inject(DatePipe);
  currencyPipe = inject(CurrencyPipe);

  constructor() {
  }

  findProp(obj: any, prop: any) {
    prop = prop.split('.');
    for (var i = 0; i < prop.length; i++) {
      if (typeof obj[prop[i]] == 'undefined') {
        return null;
      }
      obj = obj[prop[i]];
    }
    return obj;
  }

  getBaseValue(data: BaseGeneralData, dataSource: any) {
    const baseData = this.findProp(dataSource, data.key);
    if (!!baseData) {
      switch (data.type) {
        case BaseGeneralDataType.suffix: {
          return baseData + data.suffix || '';
        }
        case BaseGeneralDataType.date: {
          return this.datePipe.transform(
            baseData as Date,
            // MainConstants.baseDateFormat
          );
        }
        case BaseGeneralDataType.currency: {
          return this.currencyPipe.transform(baseData, 'HUF', 'symbol', '1.0');
        }
        case BaseGeneralDataType.enum: {
          return data!.enumValues[baseData] || '';
        }
      }
      return baseData;
    } else {
      return '';
    }
  }
}
