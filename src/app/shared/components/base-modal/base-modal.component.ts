import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import {ModalData, ModalDismissState} from "./classes/base-modal";

@Component({
  selector: 'app-base-modal',
  templateUrl: './base-modal.component.html',
  styleUrl: './base-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseModalComponent {
  @Input({ required: true }) isOpen: boolean = false;
  @Input({ required: true }) modalTitle!: string;
  @Input() confirmButton = 'modals.baseModal.confirm';
  @Input() cancelButton = 'modals.baseModal.cancel';
  @Input() confirmDisabled: boolean = false;
  @Input() showCancel = true;
  @Input() showConfirm = false;
  @Input() basePadding = true;
  @Output() onDismissChange = new EventEmitter<ModalData>();
  @Output() onWillPresentChange = new EventEmitter<any>();
  cancel(data?: any) {
    // this.modal.dismiss(data || null, ModalDismissState.cancel);
  }

  confirm(data?: any) {
    // this.modal.dismiss(data || null, ModalDismissState.confirm);
  }

  onDismiss(event: any) {
    const ev = event
    // this.modal.isOpen = false;
    this.onDismissChange.emit({
      data: ev.detail.data,
      role: <ModalDismissState>ev.detail.role!,
    });
  }
}
