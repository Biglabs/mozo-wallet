import { Component } from '@angular/core';
import { HttpResponse } from "@angular/common/http";
import { MozoService, DataReponse } from '../../services/mozo.service'
import { AppGlobals } from '../../app.globals'
import { ModalController, Events } from '@ionic/angular';
import { AddressDetailsComponent } from 'src/app/components/address-details/address-details.component';
import { SendPinConfirmPage } from '../send-pin-confirm/send-pin-confirm.page';

@Component({
  selector: 'address-book-page',
  templateUrl: 'address-book.page.html',
  styleUrls: ['address-book.page.scss']
})
export class AddressBookPage {
  static Event_Reload_Address_Book = 'reload:address-book'
  constructor(
    private mozoService: MozoService,
    public modalController: ModalController,
    private appGlobals: AppGlobals,
    public events: Events,
  ) {
    
    this.events.subscribe(AddressBookPage.Event_Reload_Address_Book, () => {
      this.getAddressBook()
    });
    this.getAddressBook()
  }
  loading: boolean = true
  addressBookData: any = [];
  addressBookViewed: any = [];
  errorMessage: string;
  queryText = ''

  groups = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  groupViewed = this.groups

  getAddressBook(event?) {
    this.mozoService.getAddressBook().subscribe((res: DataReponse) => {
      let dataRes = res.data ? res.data.items : [];
      this.loading = false
      if (dataRes) {
        this.addressBookData = dataRes.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        this.addressBookViewed = this.addressBookData
      }
    },
      error => this.errorMessage = <any>error);
  }

  getAddressByGroup(letter) {
    return this.addressBookViewed.filter((a) => a.name.charAt(0).toUpperCase() == letter.toUpperCase())
  }

  getOtherAddress() {
    return this.addressBookViewed.filter((a) => !this.groups.includes(a.name.charAt(0).toUpperCase()))
  }

  updateAddress() {
    if (this.queryText.trim() != "") {
      this.addressBookViewed = this.filterAddressByName(this.queryText)
      this.groupViewed = this.filterGroupInAddressData(this.addressBookViewed)
    } else {
      this.groupViewed = this.groups
      this.addressBookViewed = this.addressBookData
    }
  }

  async openAddressDetail(item) {
    const modal = await this.modalController.create({
      component: AddressDetailsComponent,
      componentProps: { addressDetails: item }
    });
    await modal.present();
  }

  private filterAddressByName(value: string): [any] {
    const filterValue = value.toLowerCase();
    return this.addressBookData.filter(a => a.name.toLowerCase().includes(filterValue));
  }

  private filterGroupInAddressData(data: any): any {
    return this.groups.filter((a) => {
      return data.filter((b) => b.name.charAt(0).toUpperCase() == a.toUpperCase()).length > 0
    });
  }

}
