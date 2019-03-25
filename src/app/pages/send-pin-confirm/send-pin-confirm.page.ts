import { Component } from '@angular/core';
import { NavController, ModalController, Events } from '@ionic/angular';
import { HttpResponse } from "@angular/common/http";
import { AppGlobals } from '../../app.globals'
import { AppService } from '../../app.service'
import { MozoService, DataReponse, ErrorParser } from '../../services/mozo.service'
import Utils from '../../utils'

import { SaveAddressPage } from '../save-address/save-address.page';
import { AlertService } from 'src/app/services/alert/alert.service';
declare let electron: any;

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
  pinError: boolean = false

  constructor(
    private appGlobals: AppGlobals,
    private nav: NavController,
    public modalController: ModalController,
    private appService: AppService,
    private mozoService: MozoService,
    public events: Events,
    private alertService: AlertService,
  ) {
    // if (this.appGlobals.encryptSeedWord) {
    //   this.isSending = false
    // }
    this.events.subscribe('close:txconfirm2', () => {
      this.dismiss();
    });
  }

  address: string = ''

  onChange(pin: string) {
    console.log("code", pin)
    this.pin = pin
    this.pinError = false
    if (pin.length >= 6) {

      let mnemonic = Utils.encryption.decrypt(this.appGlobals.encryptSeedWord, this.pin)
      if (mnemonic) {
        this.sendTransaction()
      } else {
        this.pinError = true
      }
    }
  }

  async dismiss(data?: any) {
    return await this.modalController.dismiss(data).then(() => {
      this.events.publish('close:txconfirm1');
    })
  }

  async showSaveAddress() {
    const modal = await this.modalController.create({
      component: SaveAddressPage,
      componentProps: { address: this.address }
    });
    return await modal.present();
  }

  createAirdrop(airdropEvent, privKey) {
    let requestData = {
      coinType: "SOLO",
      network: "SOLO",
      action: "SIGN",
      params: airdropEvent.params,
    };

    Utils.transaction.signMultipleTransactions(requestData, privKey, (error, result) => {
      console.log("error", error)
      console.log("result", result)
      if (result) {
        let dataReq = result;
        this.mozoService.sendSignedTransactionAirdrop(dataReq).subscribe(async (res: HttpResponse<any>) => {

          await this.dismiss();
          setTimeout(() => {
            electron.ipcRenderer.send("send-transaction-airdrop-callback", JSON.stringify(res.body.data))
          }, 200)

        }, (error) => {

        })
      }
    })
  }

  createTransaction(txData, privKey) {
    this.mozoService.createTransaction(txData).subscribe((res: DataReponse) => {
      if (!res.success) {
        this.showError(ErrorParser.getErrorMessage(res))
      }
      const data = res.data;
      let requestData = {
        coinType: "SOLO",
        network: "SOLO",
        action: "SIGN",
        params: data,
      };
      Utils.transaction.signTransaction(requestData, privKey, (error, result) => {
        console.log("error", error)
        if (error) {
          this.showError("Can not sign transaction")
          return
        }
        console.log("result", result)
        if (result) {
          let dataReq = JSON.parse(result);
          this.mozoService.sendSignedTransaction(dataReq).subscribe(async (res: DataReponse) => {
            if (!res.success) {
              this.showError(ErrorParser.getErrorMessage(res))
              this.status = 'fail'
            } else {
              let txReq = res.data
            
              if (txData.type === 'ex') {
                await this.dismiss();
                setTimeout(() => {
                  electron.ipcRenderer.send("send-transaction-callback", JSON.stringify(txReq))
                }, 200)
              } else {
                this.isSending = true
                this.txHash = txReq.tx.hash
                this.getTransactionStatus(txReq.tx.hash)
              }
            }
          }, (error) => {
            this.showError(ErrorParser.getErrorMessage(error))
          })
        }
      })

      console.log("data address book ", data)

    }, (error) => {
      this.showError("Can create transaction")
    })
  }

  sendTransaction() {
    this.appService.getSetting(['Address']).then((data) => {
      
      if (data && data["Address"]) {
        const privKey = Utils.encryption.decrypt(data["Address"]["privkey"], this.pin)
        let txData = this.appGlobals.txData
        this.address = txData.to
        if (txData.txType === 'airdrop') {
          this.createAirdrop(txData, privKey)
        } else {
          this.createTransaction(txData, privKey)
        }
      } else {
        this.showError("Can not get address info")
      }
    }, (error) => {
      this.showError("Can not get address info")
    })
  }

  getTransactionStatus(txHash) {
    const getTxStatus = setInterval(() => {
      this.mozoService.getTransactionStatus(txHash).subscribe((res: DataReponse) => {
        const data = res.data;

        if (!res.success || data.status === "FAILED") {
          this.showError(ErrorParser.getErrorMessage(res))
            this.status = 'fail'
          clearInterval(getTxStatus)
        }

        if (data.status === "SUCCESS") {
          this.status = 'success'
          clearInterval(getTxStatus)
        }


      }, (error) => {
        this.showError(ErrorParser.getErrorMessage(error))
        this.status = 'fail'
        clearInterval(getTxStatus)
      })
    }, 5000)
  }

  private showError(message="") {
    this.alertService.showError("Error", message)
  }
}
