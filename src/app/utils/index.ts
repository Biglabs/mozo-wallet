import * as encryption from '../helpers/EncryptionUtils';
import { Wallet } from './wallet'
import { Transaction } from './transaction'
import * as customValidator from './form-custom-validatior' 

export default {
    encryption: encryption,
    wallet: new Wallet(),
    transaction: new Transaction(),
    customValidator: customValidator
}