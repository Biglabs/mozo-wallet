import { Component} from '@angular/core';
import { ModalController, Events } from '@ionic/angular';
import {SendPinConfirmPage} from '../send-pin-confirm/send-pin-confirm.page'
import { AppGlobals } from '../../app.globals'

@Component({
  selector: 'send-confirm-mozo',
  templateUrl: 'send-confirm.page.html',
  styleUrls: ['send-confirm.page.scss']
})
export class SendConfirmPage {
  toAddress: string = ""
  amount: number = 0
  constructor(
    public modalController: ModalController,
    private appGlobals: AppGlobals,
    public events: Events,
  ) { 
    this.toAddress = this.appGlobals.txData.to
    this.amount = this.appGlobals.txData.value

    this.events.subscribe('close:txconfirm1', () => {
      this.dismiss();
    });
    
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
