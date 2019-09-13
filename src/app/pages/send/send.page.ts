import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { SendConfirmPage } from '../send-confirm/send-confirm.page';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MozoService, DataReponse } from '../../services/mozo.service'
import { AppGlobals } from '../../app.globals'
import { HttpResponse } from "@angular/common/http";


import Utils from '../../Utils';

@Component({
  selector: 'send-mozo',
  templateUrl: 'send.page.html',
  styleUrls: ['send.page.scss']
})
export class SendPage implements OnInit {
  constructor(
    private nav: NavController,
    private fb: FormBuilder,
    public modalController: ModalController,
    private mozoService: MozoService,
    private appGlobals: AppGlobals
  ) { }

  formModel = this.fb.group({
    // toAddress: [null, Validators.required],
    toAddress: [null, [Validators.required, Utils.customValidator.invalidEthAddressValidator]],
    amount: [null, Validators.required]
  });
  options: any;

  filteredOptions: Observable<[any]>;

  async onSubmit() {
    const formValues = this.formModel.value;
    this.appGlobals.txData = {
      'from': this.appGlobals.address,
      'to': formValues.toAddress,
      'value': parseInt(formValues.amount),
      'network': 'SOLO'
    };
    const modal = await this.modalController.create({
      component: SendConfirmPage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }

  ngOnInit() {

    this.mozoService.getAddressBook().subscribe((res: DataReponse) => {
      const data = res.data.items;
      if (data) {
        this.options = data;
        this.filteredOptions = this.formModel.controls['toAddress'].valueChanges
          .pipe(
            startWith(''),
            map(value => this.filter(value))
          );
      }

      console.log('data address book ', data);

    }, (error) => {

    });
  }

  private filter(value: string): [any] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().includes(filterValue) || option.soloAddress.includes(filterValue));
  }
}

