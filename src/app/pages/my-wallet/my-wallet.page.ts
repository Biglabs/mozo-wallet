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
  loading: boolean = true
  
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

  transactionData: any = [];
  errorMessage: string;
  page = 0;
  perPage = 20;

  getTransactions(event?) {
    this.mozoService.getTransactions(this.appGlobals.address, { page: this.page, size: this.perPage}).subscribe((res: HttpResponse<any>) => {
      let dataRes = res.body.data.items;
      this.loading = false
      this.transactionData = [...this.transactionData, ...dataRes]

      console.log(this.transactionData)

      this.page += 1

      event && event.target.complete();

      if (dataRes.length < this.perPage && event) {
        event.target.disabled = true;
      }


      // let txhistory = JSON.parse(body);
      //     txhistory = R.map(x => {
      //       if (x.decimal) {
      //         x.amount /= Math.pow(10, x.decimal);
      //       }
      //       x.exchange_rates = R.map(y => {
      //         let exchange_rate_data = userReference.get(network + "_" + y);
      //         if (exchange_rate_data) {
      //           return {
      //             currency : exchange_rate_data.currency,
      //             value: x.amount * exchange_rate_data.rate
      //           };
      //         }
      //       }, CONSTANTS.CURRENCY_EXCHANGE_RATE);

      //       x.address_book_name = null;
      //       x.addressFrom = x.addressFrom.toLowerCase();
      //       x.addressTo = x.addressTo.toLowerCase();
      //       let address_book_data = address_book.get();
      //       let temp_address_book_data = null;
      //       if (address_book_data) {
      //         for (var index = 0; index < address_book_data.length; ++index) {
      //           temp_address_book_data =
      //             address_book_data[index].soloAddress.toLowerCase();
      //           if (x.addressFrom == temp_address_book_data ||
      //               x.addressTo == temp_address_book_data) {
      //             x.address_book_name = address_book_data[index].name;
      //             break;
      //           }
      //         }
      //       }
      //       return x;
      //     }, txhistory);
      //     resolve(txhistory);
    },
      error => this.errorMessage = <any>error);
  }

  ngOnInit() {
    console.log("my wallet")
    this.address = this.appGlobals.address
    this.mozoService.getBalance(this.address).subscribe((res: HttpResponse<any>) => {
      const data = res.body.data;
      if(data) {
        this.balance = data['balance'] / 100
      }
      
      console.log("data balance ", data)

    }, (error) => {
       
    })

    this.getTransactions()
  }
}
