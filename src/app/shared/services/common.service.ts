import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, timer } from 'rxjs';
import {ToastType} from "../classes/common.model";

export interface ToastOptions {
  type?: ToastType;
  timeout?: number;
  translateKey?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  translate = inject(TranslateService);
  showLoader = new BehaviorSubject(false);

  toast(msg: string, options: ToastOptions) {
    const translation = this.translate.instant(msg);
    const message = !!options.translateKey ? translation : msg;

    // const toast = await this.toastCtrl.create({
    //   animated: true,
    //   color: options.type || ToastType.info,
    //   duration: options.timeout || 5000,
    //   keyboardClose: true,
    //   message,
    //   position: 'top',
    //   swipeGesture: 'vertical',
    // });
    // toast.present();
  }

  dismissToast() {
    // const toastInstance = await this.toastCtrl.getTop();
    // toastInstance?.dismiss();
  }

  presentLoading(): void {
    this.showLoader.next(true);
  }

  dismissLoading(): void {
    this.showLoader.next(false);
  }

  scrollElement(id: string) {
    timer(400).subscribe(() => {
      const element = document.getElementById(id);
      if (!element) return;

      element.scrollIntoView({
        block: 'start',
        inline: 'start',
        behavior: 'smooth',
      });
    });
  }
}
