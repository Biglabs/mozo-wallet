import { Component} from '@angular/core';
import { ModalController } from '@ionic/angular';
import {SendPinConfirmPage} from '../send-pin-confirm/send-pin-confirm.page'

@Component({
  selector: 'send-confirm-mozo',
  templateUrl: 'send-confirm.page.html',
  styleUrls: ['send-confirm.page.scss']
})
export class SendConfirmPage {
  constructor(
    public modalController: ModalController
  ) { 
    
  }

  async continue() {
    const modal = await this.modalController.create({
      component: SendPinConfirmPage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }

  dismiss(data?: any) {
    
    this.modalController.dismiss(data);
  }
}
