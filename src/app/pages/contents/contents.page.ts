import { Component } from '@angular/core';
import { AppGlobals } from '../../app.globals'

@Component({
  selector: 'layout-contents',
  templateUrl: 'contents.page.html',
  styleUrls: ['contents.page.scss']
})
export class ContentsPage {
  constructor(private appGlobals: AppGlobals) {
    console.log(appGlobals.userInfo)
  }
}
