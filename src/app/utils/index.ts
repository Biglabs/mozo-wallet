import * as encryption from '../helpers/EncryptionUtils';
import { Wallet } from './wallet'
import { Transaction } from './transaction'

export default {
    encryption: encryption,
    wallet: new Wallet(),
    transaction: new Transaction()
}