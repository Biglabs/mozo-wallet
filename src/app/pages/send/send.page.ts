import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { SendConfirmPage } from '../send-confirm/send-confirm.page';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'send-mozo',
  templateUrl: 'send.page.html',
  styleUrls: ['send.page.scss']
})
export class SendPage implements  OnInit {
  constructor(
    private nav: NavController,
    public modalController: ModalController
  ) { }

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three', 'One', 'Two', 'Three', 'One', 'Two', 'Three', 'One', 'Two', 'Three', 'One', 'Two', 'Three'];

  async continue() {
    const modal = await this.modalController.create({
      component: SendConfirmPage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }
  
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
