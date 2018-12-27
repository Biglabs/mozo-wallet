import { Injectable } from '@angular/core';
import { Events } from '@ionic/angular';

@Injectable()
export class AppGlobals {
  userInfo: any = null;
  encryptSeedWord: string = null;
  seedWord: string = null;
  address: string = null;
  txData : any = null;

  constructor(
    public events: Events
  ) {

  }

  public updateUserInfo(userInfo: any): void {
    this.userInfo = userInfo
    this.events.publish('user:update', userInfo);
  }

  public saveEncryptSeedWord(encryptSeedWord: string): void {
    this.encryptSeedWord = encryptSeedWord
  }
}
