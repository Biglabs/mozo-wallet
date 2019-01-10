import { Component, ViewChild, AfterContentInit } from '@angular/core';
import { InfiniteScroll } from '@ionic/angular';
import { HttpResponse } from "@angular/common/http";
import { MozoService } from '../../services/mozo.service'
import { AppGlobals } from '../../app.globals'

@Component({
  selector: 'transaction-page',
  templateUrl: 'transaction.page.html',
  styleUrls: ['transaction.page.scss']
})
export class TransactionPage implements AfterContentInit {
  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;
  constructor(
    private mozoService: MozoService,
    private appGlobals: AppGlobals
  ) {
    this.address = this.appGlobals.address
    this.getTransactions()
  }
  loading: boolean = true
  address: string = ''

  transactionData: any = [];
  errorMessage: string;
  page = 1;
  perPage = 20;

  getTransactions(event?) {
    this.mozoService.getTransactions(this.appGlobals.address, { page: this.page, size: this.perPage }).subscribe((res: HttpResponse<any>) => {
      let dataRes = res.body;
      this.loading = false
      this.transactionData = [...this.transactionData, ...res.body]

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

  // doInfinite(infiniteScroll) {
  //   this.page = this.page+1;
  //   setTimeout(() => {
  //     this.restApi.getUsers(this.page)
  //        .subscribe(
  //          res => {
  //            this.data = res;
  //            this.perPage = this.data.per_page;
  //            this.totalData = this.data.total;
  //            this.totalPage = this.data.total_pages;
  //            for(let i=0; i<this.data.data.length; i++) {
  //              this.users.push(this.data.data[i]);
  //            }
  //          },
  //          error =>  this.errorMessage = <any>error);

  //     console.log('Async operation has ended');
  //     infiniteScroll.complete();
  //   }, 1000);
  // }

  // toggleInfiniteScroll() {
  //   this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  // }

  ngAfterContentInit() {
    
    // console.log("containner 1", containner)

    // console.log("containner 2", containner.shadowRoot.querySelector('style'))
    // new SimpleBar(document.querySelector('.ion-content-test'), { autoHide: true })
  }

}
