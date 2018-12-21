import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pin-code',
  templateUrl: './pin-code.component.html',
  styleUrls: ['./pin-code.component.scss']
})
export class PinCodeComponent implements OnInit {

  pin: string = "";

  @Output() change: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  handleInput(pin: string) {
    if (pin === "clear") {
      this.pin = "";

    } else if (pin === "backspace") {
      this.pin = this.pin.slice(0, -1);

    } else {
      if (this.pin.length === 6) {
        return;
      }

      this.pin += pin;
    }

    this.change.emit(this.pin);
  }

  ngOnInit() {
  }

}
