export enum ModalDismissState {
  cancel = 'cancel',
  confirm = 'confirm',
}

export interface ModalData {
  data: any;
  role: ModalDismissState;
}
