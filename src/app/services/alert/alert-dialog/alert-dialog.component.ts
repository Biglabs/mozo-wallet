import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss']
})
export class AlertDialogComponent implements OnInit {

  config:any = {};
  label:any = {};

  type: string;
  title: string;
  message: string;

  constructor(
    public dialogRef: MatDialogRef<AlertDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

    this.type = data.type;
    this.title = data.title;
    this.message = data.message;
  }

  ngOnInit() {

  }

  onCloseCancel() {
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

}
