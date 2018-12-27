import { Component, OnInit, AfterViewInit} from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { HttpResponse } from "@angular/common/http";
import { SendConfirmPage } from '../send-confirm/send-confirm.page';
import { MozoService } from '../../services/mozo.service'
import { AppGlobals } from '../../app.globals'

@Component({
  selector: 'app-my-wallet',
  templateUrl: 'my-wallet.page.html',
  styleUrls: ['my-wallet.page.scss']
})
export class MyWalletPage implements OnInit {
  address: string = null
  balance: number = 0
  constructor(
    private nav: NavController,
    private mozoService: MozoService,
    private appGlobals: AppGlobals,
    public modalController: ModalController
  ) {
    console.log("my wallet 3")
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

  ngAfterViewInit() {
    console.log("my wallet 2")
  }

  ngOnInit() {
    console.log("my wallet")
    this.address = this.appGlobals.address
    this.mozoService.getBalance(this.address).subscribe((res: HttpResponse<any>) => {
      const data = res.body;
      if(data) {
        this.balance = data['balance'] / 100
      }
      
      console.log("data balance ", data)

    }, (error) => {
       
    })
  }
}
