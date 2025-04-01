import { ValidatorFn } from '@angular/forms';
import {
  CheckboxAlignment,
  CheckboxJustification,
  CheckboxLabelPlacement,
  CommonFormLangName,
  ControlBaseInputTypes,
  ControlColor,
  ControlType,
  ControlWidthClass,
  CustomFormError,
  CustomFormTemplate,
} from './control-enums';
import { BehaviorSubject } from 'rxjs';

export interface SelectAndRadioOptions {
  value: string;
  label: string;
  infoText?: string;
  additionalData?: any;
}

export interface RadioCardOptions {
  value: string;
  label: string;
  img?: string;
  info?: ControlInfo;
}

export interface ControlInfo {
  text: string;
  link?: string;
  linkText?: string;
  params?: any;
}

export enum RadioDisplay {
  grid = 'grid',
  flex = 'flex',
}

export class ControlBase<T> {
  value: T;
  key: string;
  labelClasses: string;
  prefix: string;
  order: number;
  showPasswordConditions: boolean;
  controlClasses: string;
  labelIcon: string;
  minDate: Date | null;
  maxDate: Date | null;
  radioDisplay: RadioDisplay;
  labelParams: any;
  canDelete: boolean;
  info: ControlInfo[] | [];
  singleControl: boolean;
  infoCondition: (value: any) => boolean;
  minimum: number;
  maximum: number;
  widthClass: ControlWidthClass;
  controlType: ControlType = ControlType.base;
  validators: ValidatorFn[] | null;
  inputType: ControlBaseInputTypes | null;
  options: SelectAndRadioOptions[];
  cardOptions: RadioCardOptions[];
  checkFormError!: CustomFormError;
  filteredOptions = new BehaviorSubject<SelectAndRadioOptions[]>([]);
  show: boolean;
  color: ControlColor;
  readonly: boolean;
  componentRef: CustomFormTemplate | null;
  disabled!: boolean;
  subtext: string;
  maxLength: number;
  //checkbox properties only
  checkboxLabelPlacement: CheckboxLabelPlacement;
  checkboxJustification: CheckboxJustification;
  checkboxAlignment: CheckboxAlignment;
  checkboxLabelWithLink: boolean;
  translateNeeded: boolean;
  valueType!:
    | Date
    | number
    | string
    | boolean
    | null;
  currency: string = '';
  fullSizeLabel: boolean;
  showPostalContactName: boolean;
  withoutLabelKey?: boolean;
  errorTexts = {
    pattern: 'common.form.errors.pattern',
    maxLength: 'common.form.errors.maxLength',
    minLength: 'common.form.errors.minLength',
    maximum: 'common.form.errors.maximum',
    minimum: 'common.form.errors.minimum',
    mismatch: 'common.form.errors.mismatch',
  };
  public readonly label: string;
  private readonly placeholder: string;

  constructor(
    key: string,
    value: T,
    optionalParameters: {
      prefix?: string;
      order?: number;
      label?: string;
      labelClasses?: string;
      placeholder?: string;
      widthClass?: ControlWidthClass;
      minimum?: number;
      maximum?: number;
      fullSizeLabel?: boolean;
      controlClasses?: string;
      radioDisplay?: RadioDisplay;
      inputType?: ControlBaseInputTypes | null;
      checkboxLabelWithLink?: boolean;
      options?: SelectAndRadioOptions[];
      cardOptions?: RadioCardOptions[];
      validators?: ValidatorFn[];
      onChange?: (data: any) => {};
      canDelete?: boolean;
      labelIcon?: string;
      minDate?: Date;
      maxDate?: Date;
      infoCondition?: (value: any) => boolean;
      show?: boolean;
      info?: ControlInfo[];
      checkFormError?: CustomFormError;
      checkboxLabelPlacement?: CheckboxLabelPlacement;
      checkboxJustification?: CheckboxJustification;
      checkboxAlignment?: CheckboxAlignment;
      showPasswordConditions?: boolean;
      labelParams?: any;
      componentRef?: CustomFormTemplate;
      translateNeeded?: boolean;
      color?: ControlColor;
      readonly?: boolean;
      disabled?: boolean;
      showPostalContactName?: boolean;
      subtext?: string;
      maxLength?: number;
      maxLengthErrorText?: string;
      minLengthErrorText?: string;
      maximumErrorText?: string;
      patternErrorText?: string;
      minimumErrorText?: string;
      mismatchErrorText?: string;
      withoutLabelKey?: boolean;
      singleControl?: boolean;
    } = {}
  ) {
    this.value = value;
    // Test, hogy tényleg csak az szükséges form controlok inicializálódnak egy oldalon belül
    this.key = key;
    this.showPasswordConditions =
      optionalParameters.showPasswordConditions || false;
    this.prefix = optionalParameters.prefix || CommonFormLangName.prefix;
    this.radioDisplay = optionalParameters.radioDisplay || RadioDisplay.grid;
    this.checkFormError =
      optionalParameters.checkFormError || CustomFormError.noError;
    this.minDate = optionalParameters.minDate || null;
    this.maxDate = optionalParameters.maxDate || null;
    this.labelIcon = optionalParameters.labelIcon || '';
    this.labelClasses = optionalParameters.labelClasses || '';
    this.order =
      optionalParameters.order === undefined ? 1 : optionalParameters.order;
    this.inputType = optionalParameters.inputType || null;
    this.minimum = optionalParameters.minimum || 0;
    this.maximum = optionalParameters.maximum || 9999;
    this.controlClasses = optionalParameters.controlClasses || '';
    this.options = optionalParameters.options || [];
    this.cardOptions = optionalParameters.cardOptions || [];
    this.filteredOptions.next([...this.options]);
    this.validators = optionalParameters.validators || null;
    this.show = this.isNull(optionalParameters.show)
      ? true
      : !!optionalParameters.show;
    this.canDelete = this.isNull(optionalParameters.canDelete)
      ? false
      : !!optionalParameters.canDelete;
    this.singleControl = this.isNull(optionalParameters.singleControl)
      ? false
      : !!optionalParameters.singleControl;
    this.checkboxLabelWithLink = this.isNull(
      optionalParameters.checkboxLabelWithLink
    )
      ? false
      : !!optionalParameters.checkboxLabelWithLink;
    this.disabled = this.isNull(optionalParameters.disabled)
      ? false
      : !!optionalParameters.disabled;
    this.fullSizeLabel = this.isNull(optionalParameters.fullSizeLabel)
      ? false
      : !!optionalParameters.fullSizeLabel;
    this.label = optionalParameters.label || CommonFormLangName.label;
    this.withoutLabelKey = this.isNull(optionalParameters.withoutLabelKey)
      ? false
      : !!optionalParameters.withoutLabelKey;
    this.placeholder =
      optionalParameters.placeholder || CommonFormLangName.emptyPlaceholder;
    this.info = optionalParameters.info || [];
    this.checkboxLabelPlacement =
      optionalParameters.checkboxLabelPlacement || CheckboxLabelPlacement.end;
    this.checkboxJustification =
      optionalParameters.checkboxJustification || CheckboxJustification.start;
    this.checkboxAlignment =
      optionalParameters.checkboxAlignment || CheckboxAlignment.start;
    this.labelParams = optionalParameters.labelParams || null;
    this.componentRef = optionalParameters.componentRef || null;
    this.color = optionalParameters.color || ControlColor.primary;
    this.readonly = optionalParameters.readonly || false;
    this.translateNeeded = optionalParameters.translateNeeded || false;
    this.showPostalContactName =
      optionalParameters.showPostalContactName || false;
    this.subtext = optionalParameters.subtext || '';
    this.maxLength = optionalParameters.maxLength || 0;
    this.widthClass = optionalParameters.widthClass || ControlWidthClass.W100;
    this.infoCondition =
      optionalParameters.infoCondition || this.initInfoCondition.bind(this);
    if (!!optionalParameters.patternErrorText) {
      this.errorTexts.pattern = optionalParameters.patternErrorText;
    }

    if (!!optionalParameters.maxLengthErrorText) {
      this.errorTexts.maxLength = optionalParameters.maxLengthErrorText;
    }

    if (!!optionalParameters.minLengthErrorText) {
      this.errorTexts.minLength = optionalParameters.minLengthErrorText;
    }

    if (!!optionalParameters.maximumErrorText) {
      this.errorTexts.maximum = optionalParameters.maximumErrorText;
    }

    if (!!optionalParameters.minimumErrorText) {
      this.errorTexts.minimum = optionalParameters.minimumErrorText;
    }

    if (!!optionalParameters.mismatchErrorText) {
      this.errorTexts.mismatch = optionalParameters.mismatchErrorText;
    }
  }

  initInfoCondition(value: any) {
    return true;
  }

  get controlLabel(): string {
    if (this.label == CommonFormLangName.emptyLabel) {
      return CommonFormLangName.prefix + '.' + this.label;
    } else {
      if (this.withoutLabelKey) {
        return this.prefix + '.' + this.label;
      } else {
        return this.prefix + '.' + this.key + '.' + this.label;
      }
    }
  }

  get controlPlaceholder(): string {
    if (this.placeholder == CommonFormLangName.emptyPlaceholder) {
      return CommonFormLangName.prefix + '.' + this.placeholder;
    } else {
      return this.prefix + '.' + this.key + '.' + this.placeholder;
    }
  }

  setOptions(options: SelectAndRadioOptions[]) {
    this.options = options;
    if (this.controlType == ControlType.dropdown) {
      this.filteredOptions.next([...options]);
    }
  }

  private isNull(value: any) {
    return value == null || typeof value === 'undefined';
  }
}
