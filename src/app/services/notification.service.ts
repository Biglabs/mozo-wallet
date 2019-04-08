import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(public snackBar: MatSnackBar, private zone: NgZone) {}

  open(message, action = 'Ok', duration = 3000) {
    this.zone.run(() => {
      this.snackBar.open(message, action, {
        duration: duration,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      });
    });
  }
}
