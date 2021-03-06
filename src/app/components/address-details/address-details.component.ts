import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { ViewController } from '@ionic/core';
import { ModalController, Events } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';
import { MozoService } from 'src/app/services/mozo.service';
import { AddressBookPage } from 'src/app/pages/address-book/address-book.page';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.scss']
})
export class AddressDetailsComponent implements OnInit, OnChanges {
  @Input() addressDetails: { id; name; soloAddress };

  formModel;
  isEditing = false;
  willUpdate = false

  constructor(
    public modalController: ModalController,
    private mozoService: MozoService,
    private fb: FormBuilder,
    public events: Events,
    private notiService: NotificationService,
  ) {}

  ngOnInit() {
    this.formModel = this.fb.group({
      id: [this.addressDetails.id, [Validators.required]],
      name: [this.addressDetails.name, [Validators.required]],
      soloAddress: [this.addressDetails.soloAddress, [Validators.required]]
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChange', changes);
    if (changes.addressDetails) {
      this.formModel.setValue({
        name: this.addressDetails.name
      });
    }
  }

  toggleEditName() {
    console.log("toggleEditName")
    if(this.willUpdate) {
      this.willUpdate = false;
      return;
    }
    this.isEditing = !this.isEditing;
  }

  updateName() {
    console.log("updateName")
    if(!this.isEditing) {
      return
    }
    this.willUpdate = true
    this.isEditing = false;
    let newName = this.formModel.value.name
    if (this.addressDetails.name == newName) {
      return
    }
    this.addressDetails.name = newName

    this.mozoService.updateAddressBook(this.formModel.value).subscribe(
      res => {
        console.log(res);
        if(res.success) {
          this.reloadAddressBook()
        } else {
          this.notiService.open(res.error)
        }
      },
      error => {
        this.notiService.open('Update address book fail')
        console.log(error);
      }
    );
  }

  removeAddressBook() {
    this.mozoService.removeAddressBook(this.addressDetails.id).subscribe(
      res => {
        if(res.success) {
          this.reloadAddressBook()
        } else {
          this.notiService.open(res.error)
        }
        this.reloadAddressBook()
        this.dismiss()
      },
      error => {
        this.notiService.open('Update address book fail')
        console.log(error);
      }
    );
  }

  dismiss() {
    let data = {};
    this.modalController.dismiss(data);
  }

  reloadAddressBook() {
    this.notiService.open('Update address book success')
    this.events.publish(AddressBookPage.Event_Reload_Address_Book);
  }
}
