import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MozoService {

  constructor(private http: HttpClient) {
  }

  getUserProfile(): Observable<HttpResponse<any>> {
    return this.http.get<any>(`${environment.apis.solomon}/user-profile`, { observe: 'response' });
  }

  updateWalletInfo(data): Observable<HttpResponse<any>> {
    return this.http.put<any>(`${environment.apis.solomon}/user-profile/wallet`, data, { observe: 'response' });
  }

  getBalance(address): Observable<HttpResponse<any>> {
    return this.http.get<any>(`${environment.apis.solomon}/solo/contract/solo-token/balance/${address}`, { observe: 'response' });
  }

  getAddressBook(): Observable<HttpResponse<any>> {
    return this.http.get<any>(`${environment.apis.solomon}/contacts`, { observe: 'response' });
  }

  getTransactions(address, params): Observable<HttpResponse<any>> {
    return this.http.get<any>(`${environment.apis.solomon}/solo/contract/solo-token/txhistory/${address}`, { params : params, observe: 'response' });
  }

  createTransaction(data): Observable<HttpResponse<any>> {
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

    return this.http.post<any>(`${environment.apis.solomon}/solo/contract/solo-token/transfer`, reqData, { observe: 'response' });
  };

  getBeacon(): Observable<HttpResponse<any>> {
    return this.http.get<any>(`${environment.apis.store}/retailer/beacon`, { observe: 'response' });
  }

  createAirDropEvent(airdropEvent): Observable<HttpResponse<any>> {
    return this.http.post<any>(`${environment.apis.store}/air-drops/prepare-event`, airdropEvent, { observe: 'response' });
  }

  sendSignedTransactionAirdrop(data): Observable<HttpResponse<any>> {
    return this.http.post<any>(`${environment.apis.store}/air-drops/sign`, data, { observe: 'response' });
  };

  sendSignedTransaction(data): Observable<HttpResponse<any>> {
    return this.http.post<any>(`${environment.apis.solomon}/solo/contract/solo-token/send-signed-tx`, data, { observe: 'response' });
  };

  getTransactionStatus(txHash): Observable<HttpResponse<any>> {
    return this.http.get<any>(`${environment.apis.solomon}/eth/solo/txs/${txHash}/status`, { observe: 'response' });
  };

  saveAddress(data): Observable<HttpResponse<any>> {
    return this.http.post<any>(`${environment.apis.solomon}/contacts`, data, { observe: 'response' });
  };




  // let options = common.setRequestData();
  // options.url = mozo_service_host + "/user-profile/wallet";
  // options.method = "PUT";
  // options.json = true;
  // options.body = {
  //   encryptSeedPhrase : encrypted_mnemonic,
  //   offchainAddress : offchain_address
  // };

}
