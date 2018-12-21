import * as encryption from '../helpers/EncryptionUtils';
import { Wallet } from './wallet'

export default {
    encryption: encryption,
    wallet: new Wallet()
}