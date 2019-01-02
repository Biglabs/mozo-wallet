
import bip39 from 'bip39'
import bip32 from 'bip32'
import ethUtil from 'ethereumjs-util';
import * as encryption from '../helpers/EncryptionUtils';

import bitcoin from "bitcoinjs-lib";

declare const Buffer;

export class Wallet {

    constructor() { }

    /**
     * Returns an account's address based on a specified coin type.
     * The output will include address and private key.
     * @param {KeyPair} wallet
     * @param {Int} addressIndex 
     */
    public generateAddressAtIndex(wallet, addressIndex): any {
        try {
            let userWallet = wallet.derive(addressIndex);
            var address = "";
            var privkey = "";
            //var keyPair = userWallet.keyPair;
            //var privKeyBuffer = keyPair.d.toBuffer(32);
            var privKeyBuffer = userWallet.privateKey;
            privkey = privKeyBuffer.toString('hex');

            var addressBuffer = ethUtil.privateToAddress(privKeyBuffer);
            var hexAddress = addressBuffer.toString('hex');
            var checksumAddress = ethUtil.toChecksumAddress(hexAddress);
            address = ethUtil.addHexPrefix(checksumAddress);
            privkey = ethUtil.addHexPrefix(privkey);

            return {
                address: address,
                addressIndex: addressIndex,
                privkey: privkey
            };

        } catch (error) {
            console.error(error);
        }
        return null;
    }

    /**
     * Generate a list of keypair (wallet) according to each derivation path.
     * @param {String} mnemonic
     * @return {Array} array of {KeyPair}
     */
    public generateWallets(mnemonic): any {
        // let seed = bip39.mnemonicToSeedHex(mnemonic);
        // //let rootKey = Bitcoin.HDNode.fromSeedHex(seed);
        // let rootKey = bip32.fromSeed(Buffer.from(seed, 'hex'))
        // let path = "m/44'/60'/0'/0";
        // let wallet = rootKey.derivePath(path);
        // return wallet


        const seed = bip39.mnemonicToSeed(mnemonic)
        const root = bip32.fromSeed(seed)

        const path = "m/44'/60'/0'/0"
        const wallet = root.derivePath(path)

        return wallet

        // const { address } = bitcoin.payments.p2sh({
        //     redeem: bitcoin.payments.p2wpkh({ pubkey: child.publicKey, network: bitcoin.networks.testnet }),
        //     network: bitcoin.networks.testnet
        // })
    }

    /**
     * Return a list of keypair (wallet) following a list of coin type.
     * A mnemonic string will be used in this process and stored to local db in encryption for backup purpose.
     * @param {String} importedPhrase
     * @param {String} pin
     * @return {Array}
     */
    public createNewWallet(importedPhrase, pin, mustSave) {
        let mnemonic = importedPhrase ||
            bip39.generateMnemonic(128, null, bip39.wordlists.english);
        if (mustSave) {
            // Save PIN and mnemonic
            let encryptedMnemonic = encryption.encrypt(mnemonic, pin);
        }
        let wallets = this.generateWallets(mnemonic);
        return wallets;
    }

    /**
     * Return a mnemonic string.
     * @return String
     */
    public generateMnemonic() {
        let mnemonic = bip39.generateMnemonic(128, null, bip39.wordlists.english);
        return mnemonic;
    }

}
