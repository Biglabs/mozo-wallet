import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { HttpResponse } from '@angular/common/http';


@Injectable()
export class AlertService {

  constructor(private dialog: MatDialog) {}

  showError(title: string = '', message: string= '', delay=0) {
    setTimeout(()=> {
      let dialogRef = this.dialog.open(AlertDialogComponent, {
        width: "400px",
        data: { type: "error", title: title, message: message }
      });
      dialogRef.afterClosed().subscribe(data => {
        // console.log("Dialog output:", data)
      });
    }, delay)
  }

}
