import { Component, ViewChild } from '@angular/core';
import { InfiniteScroll } from '@ionic/angular';
import { HttpResponse } from "@angular/common/http";
import { MozoService } from '../../services/mozo.service'
import { AppGlobals } from '../../app.globals'

@Component({
  selector: 'address-book-page',
  templateUrl: 'address-book.page.html',
  styleUrls: ['address-book.page.scss']
})
export class AddressBookPage {
  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;
  constructor(
    private mozoService: MozoService,
    private appGlobals: AppGlobals
  ) {
    this.address = this.appGlobals.address
    this.getAddressBook()
  }
  loading: boolean = true
  address: string = ''

  addressBookData: any = [];
  errorMessage: string;
  page = 1;
  perPage = 20;

  getAddressBook(event?) {
    this.mozoService.getAddressBook().subscribe((res: HttpResponse<any>) => {
      let dataRes = res.body;
      this.loading = false
      this.addressBookData = [...this.addressBookData, ...res.body]

      this.page += 1

      event && event.target.complete();

      if (dataRes.length < this.perPage && event) {
        event.target.disabled = true;
      }
    },
      error => this.errorMessage = <any>error);
  }

}
