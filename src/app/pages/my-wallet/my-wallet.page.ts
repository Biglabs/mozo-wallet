import { Component, OnInit} from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { SendConfirmPage } from '../send-confirm/send-confirm.page';

@Component({
  selector: 'app-my-wallet',
  templateUrl: 'my-wallet.page.html',
  styleUrls: ['my-wallet.page.scss']
})
export class MyWalletPage implements OnInit {
  constructor(
    private nav: NavController,
    public modalController: ModalController
  ) {
   
    //this.openSendConfirm()
  }

  async openSendConfirm() {
    const modal = await this.modalController.create({
      component: SendConfirmPage,
      componentProps: { params: 123 }
    });
    return await modal.present();
  }

  send() {
    this.nav.navigateForward("/send")
  }

  ngOnInit() {
    //this.openSendConfirm()
  }
}
