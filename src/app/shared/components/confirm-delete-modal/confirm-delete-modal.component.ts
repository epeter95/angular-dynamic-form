import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {ModalData, ModalDismissState} from "../base-modal/classes/base-modal";

@Component({
  selector: 'app-confirm-delete-modal',
  templateUrl: './confirm-delete-modal.component.html',
  styleUrl: './confirm-delete-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmDeleteModalComponent {
  @Input() title!: string;
  @Input() additionalInfo!: string;
  @Output() action = new EventEmitter<boolean>();

  closeModal(data: ModalData) {
    this.action.emit(data.role == ModalDismissState.confirm);
  }
}
