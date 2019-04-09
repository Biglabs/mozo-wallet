import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MozoService {
  constructor(private http: HttpClient) {}

  getUserProfile(): Observable<HttpResponse<any>> {
    return this.http.get<any>(`${environment.apis.solomon}/user-profile`, {
      observe: 'response'
    });
  }

  updateWalletInfo(data): Observable<HttpResponse<any>> {
    return this.http.put<any>(
      `${environment.apis.solomon}/user-profile/wallet`,
      data,
      { observe: 'response' }
    );
  }

  getBalance(address): Observable<HttpResponse<any>> {
    return this.http.get<any>(
      `${environment.apis.solomon}/solo/contract/solo-token/balance/${address}`,
      { observe: 'response' }
    );
  }

  getAddressBook(): Observable<HttpResponse<any>> {
    return this.http.get<any>(`${environment.apis.solomon}/contacts`, {
      observe: 'response'
    });
  }

  updateAddressBook(dto: { id; name; soloAddress }): Observable<DataReponse> {
    return this.handleError(
      this.http.put<DataReponse>(`${environment.apis.solomon}/contacts`, dto, {
        observe: 'response'
      })
    );
  }

  removeAddressBook(id: number): Observable<DataReponse> {
    return this.handleError(
      this.http.delete<any>(`${environment.apis.solomon}/contacts/${id}`, {
        observe: 'response'
      })
    );
  }

  getTransactions(address, params): Observable<HttpResponse<any>> {
    return this.http.get<any>(
      `${
        environment.apis.solomon
      }/solo/contract/solo-token/txhistory/${address}`,
      { params: params, observe: 'response' }
    );
  }

  createTransaction(data): Observable<DataReponse> {
    data.to = data.to.trim();
    let reqData = {
      gas_price: 0,
      gas_limit: 4300000,
      inputs: [
        {
          addresses: [data.from]
        }
      ],
      outputs: [
        {
          addresses: [data.to],
          value: data.value * Math.pow(10, 2)
        }
      ]
    };

    return this.handleError(
      this.http.post<any>(
        `${environment.apis.solomon}/solo/contract/solo-token/transfer`,
        reqData,
        { observe: 'response' }
      )
    );
  }

  getBeacon(): Observable<HttpResponse<any>> {
    return this.http.get<any>(`${environment.apis.store}/retailer/beacon`, {
      observe: 'response'
    });
  }

  createAirDropEvent(airdropEvent): Observable<HttpResponse<any>> {
    return this.http.post<any>(
      `${environment.apis.store}/air-drops/prepare-event`,
      airdropEvent,
      { observe: 'response' }
    );
  }

  sendSignedTransactionAirdrop(data): Observable<any> {
    return this.http.post<any>(
      `${environment.apis.store}/air-drops/sign`,
      data,
      { observe: 'response' }
    );
  }

  sendSignedTransaction(data): Observable<DataReponse> {
    return this.handleError(
      this.http.post<any>(
        `${environment.apis.solomon}/solo/contract/solo-token/send-signed-tx`,
        data,
        { observe: 'response' }
      )
    );
  }

  getTransactionStatus(txHash): Observable<DataReponse> {
    return this.handleError(
      this.http.get<any>(
        `${environment.apis.solomon}/eth/solo/txs/${txHash}/status`,
        { observe: 'response' }
      )
    );
  }

  saveAddress(data): Observable<HttpResponse<any>> {
    return this.http.post<any>(`${environment.apis.solomon}/contacts`, data, {
      observe: 'response'
    });
  }

  // let options = common.setRequestData();
  // options.url = mozo_service_host + "/user-profile/wallet";
  // options.method = "PUT";
  // options.json = true;
  // options.body = {
  //   encryptSeedPhrase : encrypted_mnemonic,
  //   offchainAddress : offchain_address
  // };

  private handleError(reponse: Observable<HttpResponse<DataReponse>>) {
    try {
      return reponse.pipe(
        map(res => {
          return ErrorParser.getParsedReponse(res);
        }),
        catchError(res => {
          return of(ErrorParser.getParsedReponse(res));
        })
      );
    } catch (err) {
      return of(ErrorParser.getParsedReponse());
    }
  }
}

export class ErrorParser {
  static getParsedReponse(res = null) {
    let parsedReponse: DataReponse
    if (ErrorParser.hasError(res)) {
      parsedReponse = {
        success: false,
        error: ErrorParser.getErrorMessage(res),
        data: null
      };
    } else {
      parsedReponse = {
        success: true,
        data: res.body.data,
        error: res.body.error
      }
    }
    return parsedReponse
  }

  static hasError(res: HttpResponse<{ data, success }>): boolean {
    if (!res || !res.body || !res.body.success) {
      return true;
    }
    return false
  }

  static getErrorMessage(res) {
    if (!res || !res.body) {
      return "Empty reponse"
    }

    if (!res.body.success) {
      return ErrorParser.errorCodeToMessage(res.body.error)
    }

    return ""
  }

  static errorCodeToMessage(errorCode: string) {
    switch (errorCode) {
      case "INTERNAL_ERROR":
      case "INVALID_REQUEST":
      case "SOLOMON_USER_PROFILE_WALLET_ADDRESS_IN_USED":
      case "SOLOMON_USER_PROFILE_WALLET_INVALID_UPDATE_EXISTING_WALLET_ADDRESS":
      case "SOLOMON_USER_PROFILE_WALLET_INVALID_UPDATE_MISSING_FIELD":
      case "SOLOMON_USER_PROFILE_WALLET_INVALID_ONCHAIN_SAME_OFFCHAIN_FIELD":
      case "SOLOMON_FATAL_USER_NO_OFFCHAIN_ADDRESS":
      case "SOLOMON_FATAL_USER_NO_PROFILE":
      case "SOLOMON_SOLO_RESOURCE_FATAL_USER_NO_OFFCHAIN_ADDRESS":
      case "SOLOMON_PAYMENT_REQUEST_INVALID_NON_EXIST_WALLET_ADDRESS":
        return "Cannot connect to MozoX servers. Please contact us for more information (email + phone)";
      case "INVALID_USER_TOKEN":
        return "Your session has expired. Please login again";
      case "SOLOMON_FATAL_USE_DIFFERENT_OFFCHAIN_ADDRESS":
        return "Your wallet was updated but did not sync with your current device. Please restore your wallet first."
      case "TRANSACTION_ADDRESS_STATUS_PENDING":
      case "TRANSACTION_ERROR_NONCE_TOO_LOW":
      case "TRANSACTION_ERROR_SEND_TX":
        return "Something is wrong with your account status. Please try again."
      case "SOLOMON_USER_ADDRESS_BOOK_DUPLICATE_OFFCHAIN_ADDRESS":
        return "This address already exists in your Address Book"
      default:
        console.log("Not clarify error code: ", errorCode)
        return "Cannot connect to MozoX servers. Please contact us for more information (email + phone)"
    }
  }
}

export interface DataReponse {
  success: boolean
  data: any
  error: any
}
