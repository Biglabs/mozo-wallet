import { Component, OnInit, Input } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { MozoService } from '../../services/mozo.service'
import { AppGlobals } from '../../app.globals'
import { HttpResponse } from "@angular/common/http";

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
    public loadingController: LoadingController
  ) { }

  @Input() address: string

  formModel: any
  isSending: boolean = false
  status: string = 'pending'

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
    this.isSending = true
    let reqData = {
      name: this.formModel.value.name,
      soloAddress: this.formModel.value.address
    }
    this.mozoService.saveAddress(reqData).subscribe((res: HttpResponse<any>) => {
      const data = res.body;
      if (data) {
        // this.balance = data['balance'] / 100
        //this.dismissLoading()
        this.status = 'success'
        setTimeout(() => { this.dismiss() }, 500)
      }

      console.log("save address book ", data)

    }, (error) => {
      //this.dismissLoading()
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
