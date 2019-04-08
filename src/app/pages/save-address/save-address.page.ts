import { Component, OnInit, Input } from '@angular/core';
import { NavController, LoadingController, Events } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { MozoService, ErrorParser } from '../../services/mozo.service'
import { AppGlobals } from '../../app.globals'
import { HttpResponse } from "@angular/common/http";
import { AddressBookPage } from '../address-book/address-book.page';

@Component({
  selector: 'save-address',
  templateUrl: 'save-address.page.html',
  styleUrls: ['save-address.page.scss']
})
export class SaveAddressPage implements OnInit {
  constructor(
    private nav: NavController,
    private fb: FormBuilder,
    public modalController: ModalController,
    private mozoService: MozoService,
    private appGlobals: AppGlobals,
    public loadingController: LoadingController,
    public events: Events,
  ) { }

  @Input() address: string

  formModel: any
  isSending: boolean = false
  isSubmitted: boolean = false
  status: string = 'pending'
  errorMessage: string

  dismiss(data?: any) {
    this.modalController.dismiss(data);
  }

  // async presentLoading() {
  //   const loading = await this.loadingController.create({
  //     spinner: "circles",
  //     message: 'Saving...',
  //     translucent: true,
  //     cssClass: 'custom-loading'
  //   });
  //   return await loading.present();
  // }

  // dismissLoading() {
  //   this.loadingController.dismiss();
  // }

  onSubmit() {
    //this.presentLoading()
    this.errorMessage = ""
    this.isSending = true
    this.isSubmitted = true
    let reqData = {
      name: this.formModel.value.name,
      soloAddress: this.formModel.value.address
    }
    this.mozoService.saveAddress(reqData).subscribe((res: HttpResponse<any>) => {
      this.isSending = false
      const body = res.body;
      if (body && body.success) {
        // this.balance = data['balance'] / 100
        this.status = 'success'
        setTimeout(() => { this.dismiss() }, 500)
      } else {
        this.status = 'fail'
        this.errorMessage = ErrorParser.getErrorMessage(res)
      }
      this.events.publish(AddressBookPage.Event_Reload_Address_Book);

      console.log("save address book ", body)

    }, (error) => {
      this.isSending = false
      this.status = 'fail'
    })
  }

  ngOnInit() {
    console.log(this.address)
    this.formModel = this.fb.group({
      name: [null, Validators.required],
      address: [this.address]
    });
  }
}
