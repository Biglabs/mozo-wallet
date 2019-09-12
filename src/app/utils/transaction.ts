import Web3 from 'web3';
import ethUtil from 'ethereumjs-util';
import encryption from '../helpers/EncryptionUtils';

import Bitcoin from "bitcoinjs-lib";
declare const Buffer;


export class Transaction {

    constructor() { }
    /**
     * Serialize returns the ECDSA signature in the more strict DER format.  Note
     * that the serialized bytes returned do not include the appended hash type
     * used in Bitcoin signature scripts.
     * 
     * encoding/asn1 is broken so we hand roll this output:
     * 0x30 <length> 0x02 <length r> r 0x02 <length s> s
     * @param {Array} v
     * @param {Array} r
     * @param {Array} s
     * @return {String}
     */
    serialize = function(v, r, s) {
        let rB = this.canonicalizeInt(r);
        let sB = this.canonicalizeInt(s);
        let prefix = "30" + (rB.length + sB.length + 4).toString(16);
        let rStr = "02" + rB.length.toString(16) + rB.toString('hex');
        let sStr = "02" + sB.length.toString(16) + sB.toString('hex');
        let result: any  = prefix.concat(rStr, sStr);
        return result.toString('hex');
    }

    /**
     * canonicalizeInt returns the bytes for the passed big integer adjusted as
     * necessary to ensure that a big-endian encoded integer can't possibly be
     * misinterpreted as a negative number.  This can happen when the most
     * significant bit is set, so it is padded by a leading zero byte in this case.
     * Also, the returned bytes will have at least a single byte when the passed
     * value is 0.  This is required for DER encoding.
     * @param {Array} buffer
     * @return {Array}
     */
    canonicalizeInt = function (bufferData) {
        var bytes = bufferData;
        if (bytes.length == 0) {
            bytes[0] = 0x00;
        }
        if ((bytes[0] & 0x80) != 0) {
            var paddedBytes = new Buffer(bytes.length + 1);
            paddedBytes[0] = 0x00;
            bytes.copy(paddedBytes, 1);
            bytes = paddedBytes;
        }
        return bytes;
    }

    /**
     * Returns the object including signature of `tosign` and public key from private key.
     * The output of this function can be use in `handleSignTransaction` to complete the transaction.
     * @param {String} tosign
     * @param {Buffer} privateKey
     * @param {String} net
     * @returns {Object}
     */
    public signTxMessage(tosign, privateKey, net) {
        try {
            var sign = null;
            var publicKey = null;
            if (Web3.utils.isHex(privateKey)) { //ETH
                let bufferPrikey = ethUtil.toBuffer(privateKey);
                // Remove the prefix "0x" if any
                let tosignBuffer = new Buffer(tosign.replace("0x", ""), "hex");
                let msgSign = ethUtil.ecsign(tosignBuffer, bufferPrikey);
                publicKey = ethUtil.privateToPublic(bufferPrikey).toString('hex');
                console.log('Public key: ' + publicKey);
                sign = this.serialize(msgSign.v, msgSign.r, msgSign.s);
                console.log('Sign: ' + sign);
            } else { //BTC
                let keyPair = new Bitcoin.ECPair.fromWIF(privateKey, net);
                publicKey = keyPair.getPublicKeyBuffer().toString('hex');
                sign = keyPair.sign(new Buffer(tosign, 'hex')).toDER().toString('hex');
            }
            return { signature: sign, publicKey: publicKey };
        } catch (error) {
            console.log("Error signTxMessage: " + error);
        }
        return null;
    }

    /**
     * Return private keys related to input address.
     * @param {String} pin
     * @param {Array} inputs
     * @param {CoinType} coinType
     */
    getAllPrivateKeys = function (pin, inputs, coinType) {
        var privKeys = [];
        for (var i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            let address = input.addresses[0];
            // Because Signer store ETH address in hex format
            // Therefore, if inputs address formats are not in hex, they must be converted to hex.
            //if (coinType == Constant.COIN_TYPE.ETH.name) {
            if (!address.startsWith("0x")) {
                address = "0x" + address;
            }
            //}
            let encryptedPrivateKey = ""//addressDAO.getPrivateKeyFromAddress(address);
            if (!encryptedPrivateKey) {
                return null;
            }
            let privateKey = encryption.decrypt(encryptedPrivateKey, pin);
            privKeys.push(privateKey);
        }
        return privKeys;
    }

    /**
     * Sign a transaction with format inputs, outputs, toSign, publicKeys and signatures.
     * @param {JSON} txData
     * @param {String} pin
     * @param {function} callback
     */
    public signTransaction(txData, privateKey, callback) {
        
        try {
            var validateTx = txData.params;
            //var network = txData.network;
            console.log('Bitcoin', Bitcoin)
            const net = Bitcoin.networks.testnet;
            // signing each of the hex-encoded string required to finalize the transaction
            validateTx.pubkeys = [];
            validateTx.signatures = [];
            validateTx.tosign.map((tosign, index) => {
                var sign = this.signTxMessage(tosign, privateKey, net);
                console.log('Sign: ' + sign);
                validateTx.pubkeys.push(sign.publicKey);
                validateTx.signatures.push(sign.signature);
            });
            if (validateTx.signatures.length != validateTx.tosign.length) {
                if (typeof callback === 'function') {
                    //callback(Constant.ERROR_TYPE.INVALID_ADDRESS, null);
                }
                return;
            }
            let signedTransaction = JSON.stringify(validateTx);
            if (typeof callback === 'function') {
                callback(null, signedTransaction);
            }
        } catch (error) {
            if (typeof callback === 'function') {
                callback(error, null);
            }
        }
    }

    /**
     * Sign multiple transaction with format inputs, outputs, toSign, publicKeys and signatures.
     * @param {Array} txData
     * @param {String} pin
     * @param {function} callback
     */
    public signMultipleTransactions(txInputData, privateKey, callback) {
        if (!privateKey) {
            if (typeof callback === 'function') {
                callback(new Error("Can not use the PIN."), null);
            }
            return;
        }

        let result_data = [];


        for (let index = 0; index < txInputData.params.length; ++index) {
            let txData = txInputData.params[index];
            var inputs = txData.tx.inputs;
            console.log(inputs);
            // var privKeys = this.getAllPrivateKeys(privateKey, inputs, txData.coinType);
            // if (!privKeys || privKeys.length == 0) {
            //     if (typeof callback === 'function') {
            //         //callback(Constant.ERROR_TYPE.INVALID_ADDRESS, null);
            //     }
            //     return;
            // }

            try {
                var validateTx = txData;
                //var network = txInputData.network;
                const net = Bitcoin.networks.testnet;
                // signing each of the hex-encoded string required to finalize the transaction
                validateTx.pubkeys = [];
                validateTx.signatures = [];
                validateTx.tosign.map((tosign, index) => {
                    //var privateKey = privKeys[index];
                    var sign = this.signTxMessage(tosign, privateKey, net);
                    console.log('Sign: ' + sign);
                    validateTx.pubkeys.push(sign.publicKey);
                    validateTx.signatures.push(sign.signature);
                });
                if (validateTx.signatures.length != validateTx.tosign.length) {
                    if (typeof callback === 'function') {
                        //callback(Constant.ERROR_TYPE.INVALID_ADDRESS, null);
                    }
                    return;
                }
                result_data.push(validateTx);

            } catch (error) {
                if (typeof callback === 'function') {
                    callback(error, null);
                }
            }
        }

        if (typeof callback === 'function') {
            callback(null, result_data);
        }
    }
}
