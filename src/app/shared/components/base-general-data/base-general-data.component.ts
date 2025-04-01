import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  OnInit,
} from '@angular/core';
import {
  BaseGeneralData,
  BaseGeneralDataType,
} from './classes/base-general-data';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BaseGeneralDataService } from './services/base-general-data.service';
import { Router } from '@angular/router';
import {ModalData, ModalDismissState} from "../base-modal/classes/base-modal";

@Component({
  selector: 'app-base-general-data',
  templateUrl: './base-general-data.component.html',
  styleUrl: './base-general-data.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseGeneralDataComponent implements OnInit {
  @Input() baseGeneralData!: BaseGeneralData[];
  @Input() mainTranslateKey!: string;
  @Input() dataSource: any;
  modalIsOpen = new BehaviorSubject(false);
  router = inject(Router);
  translateService = inject(TranslateService);
  baseGeneralDataService = inject(BaseGeneralDataService);
  translatesData!: Observable<any>;
  protected readonly BaseGeneralDataType = BaseGeneralDataType;

  ngOnInit(): void {
    this.translatesData = this.translateService.get(this.mainTranslateKey);
  }

  navigateLink(data: BaseGeneralData) {
    if (!!data.openConfirm) {
      this.modalIsOpen.next(true);
    } else {
      this.router.navigate([data.link], {
        queryParams: data.linkQueryParams,
        replaceUrl: true,
      });
    }
  }

  onDismiss(event: ModalData, data: BaseGeneralData) {
    this.modalIsOpen.next(false);
    if (event.role === ModalDismissState.confirm) {
      const timeout = setTimeout(() => {
        clearTimeout(timeout);
        this.router.navigate([data.link], {
          queryParams: data.linkQueryParams,
          replaceUrl: true,
        });
      }, 500);
    }
  }
}
