import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { SecurityUser } from './security-api.model';
import { Storage, StorageConfig } from '@ionic/storage';

@Injectable()
export class SecurityApiProvider {
  _storageKeyName : string = 'digIx.feritual.json';
  baseUrl : string = 'https://comcricketwebapi.azurewebsites.net/api/';

  constructor(
    private http: HttpClient,
    private storage : Storage) {
  }

  public authenticate(loginName : string, loginToken : string) : Observable<SecurityUser> {
    var headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    //headers.append('X-Login-Name', loginName);
    //headers.append('X-Login-Token', loginToken);

    var url = this.baseUrl + 'login/authenticate' +
      '?loginName=' + loginName +
      '&loginToken=' + loginToken;
    console.log('authenticate', url);

    var result = this.http.get(url, { headers: headers })
      .map(res => <SecurityUser>res);

    return result;
  }

  public requestLoginToken(loginName : string) : any {
    var headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    headers.append('X-Login-Name', loginName);

    var url = this.baseUrl + 'login/requestLoginToken?loginName='+ loginName;
    console.log('requestLoginToken', url);

    return this.http.get(url, { headers: headers })
      .map(res => <any>res);

  }

  public getLoggedInUser() : Promise<SecurityUser> {
    return new Promise((resolve, reject) => {
        this.storage.get(this._storageKeyName)
          .then((json) => {
            if(json == null || json=='') {
              resolve(null);
            }
            else {
              let token = JSON.parse(json);
              resolve(token);

              // TODO: check if login is expired and/or,
              // make a call to validate if the user is still valid
              //this.storeLoggedInUser(token)
              //  .then(user =>  {
              //    resolve(token);
              //  });
            }
          });
        });
  }

  public logOut() : Promise<any> {
    return this.storeLoggedInUser(null);
  }

  public storeLoggedInUser(user : SecurityUser) : Promise<SecurityUser> {
    return new Promise((resolve, reject) => {
      var data = (user==null) ? null : JSON.stringify(user);
      this.storage.set(this._storageKeyName, data)
      .then(() => {
        resolve(user);
      });
    });
  }
}
