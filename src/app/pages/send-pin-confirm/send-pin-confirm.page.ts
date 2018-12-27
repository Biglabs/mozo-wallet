import { Component } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { HttpResponse } from "@angular/common/http";
import { AppGlobals } from '../../app.globals'
import { AppService } from '../../app.service'
import { MozoService } from '../../services/mozo.service'
import Utils from '../../utils'

import { SaveAddressPage } from '../save-address/save-address.page';

@Component({
  selector: 'send-pin-confirm',
  templateUrl: 'send-pin-confirm.page.html',
  styleUrls: ['send-pin-confirm.page.scss']
})
export class SendPinConfirmPage {

  private loading: boolean = false
  public isSending: boolean = false
  private pin: string = ""
  private status: string = 'pending'
  private txHash: string = ""

  constructor(
    private appGlobals: AppGlobals,
    private nav: NavController,
    public modalController: ModalController,
    private appService: AppService,
    private mozoService: MozoService
  ) {
    // if (this.appGlobals.encryptSeedWord) {
    //   this.isSending = false
    // }
  }

  address: string = ''

  onChange(pin: string) {
    console.log("code", pin)
    this.pin = pin
    if (pin.length >= 6) {


      let mnemonic = Utils.encryption.decrypt(this.appGlobals.encryptSeedWord, this.pin)
      if (mnemonic) {
        this.sendTransaction()
      } else {
        //show error message
      }

      // setTimeout(() => {
      //   this.status = 'success'
      //   setTimeout(() => {
      //     this.status = 'fail'
      //   }, 3000)
      // }, 3000)
    }
  }

  dismiss(data?: any) {
    this.modalController.dismiss(data);
  }

  async showSaveAddress() {
    const modal = await this.modalController.create({
      component: SaveAddressPage,
      componentProps: { address: this.address }
    });
    return await modal.present();
  }

  sendTransaction() {
    this.appService.getSetting(['Address']).then((data) => {
      console.log("data", data)
      if (data["Address"]) {
        const privKey = Utils.encryption.decrypt(data["Address"]["privkey"], this.pin)
        let txData = this.appGlobals.txData

        this.address = txData.params.to

        this.mozoService.createTransaction(txData.params).subscribe((res: HttpResponse<any>) => {
          const data = res.body;
          if (data) {
            let request_data = {
              coinType: "SOLO",
              network: "SOLO",
              action: "SIGN",
              params: data,
            };
            Utils.transaction.signTransaction(request_data, privKey, (error, result) => {
              console.log("error", error)
              console.log("result", result)
              if (result) {
                let dataReq = JSON.parse(result);
                this.mozoService.sendSignedTransaction(dataReq).subscribe((res: HttpResponse<any>) => {
                  const data = res.body;
                  this.isSending = true
                  this.txHash = data.tx.hash
                  this.getTransactionStatus(data.tx.hash)

                }, (error) => {

                })
              }
            })
          }

          console.log("data address book ", data)

        }, (error) => {

        })


      }
    }, (error) => {
      //Show error
    })
  }

  getTransactionStatus(txHash) {
    const getTxStatus = setInterval(()=>{
      this.mozoService.getTransactionStatus(txHash).subscribe((res: HttpResponse<any>) => {
        const data = res.body;

        console.log("status", data)
        if(data.status === "SUCCESS") {
          this.status = 'success'
          clearInterval(getTxStatus)
        }

        if(data.status === "FAILED") {
          this.status = 'fail'
          clearInterval(getTxStatus)
        }

      }, (error) => {
        //this.status = 'fail'
        clearInterval(getTxStatus)
      })
    }, 5000)
  }
}
