import { AbstractControl } from '@angular/forms';

export function invalidEthAddressValidator(control: AbstractControl) {
    let regex =/^(0x)?[0-9a-fA-F]{40}$/i
    if (regex.test(control.value)) {
      return null
    } else {
      return {
        "invalidAddress": true
      }
    }
  }