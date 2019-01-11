import { Component } from '@angular/core';
import { HttpResponse } from "@angular/common/http";
import { MozoService } from '../../services/mozo.service'
import { AppGlobals } from '../../app.globals'

@Component({
  selector: 'address-book-page',
  templateUrl: 'address-book.page.html',
  styleUrls: ['address-book.page.scss']
})
export class AddressBookPage {
  constructor(
    private mozoService: MozoService,
    private appGlobals: AppGlobals
  ) {
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
    this.mozoService.getAddressBook().subscribe((res: HttpResponse<any>) => {
      let dataRes = res.body;
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

  updateAddress() {
    if (this.queryText.trim() != "") {
      this.addressBookViewed = this.filterAddressByName(this.queryText)
      this.groupViewed = this.filterGroupInAddressData(this.addressBookViewed)
    } else {
      this.groupViewed = this.groups
      this.addressBookViewed = this.addressBookData
    }
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
