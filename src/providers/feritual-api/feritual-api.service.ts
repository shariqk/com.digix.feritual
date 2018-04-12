import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class CricketApiProvider {
  baseUrl : string = 'https://comcricketwebapi.azurewebsites.net/api/';
  //baseUrl : string = 'http://localhost:53330/api/';

  constructor(public http: HttpClient) {
    //console.log('loc', window.location.href);
  }

/*
  public getFixtures() : Observable<Fixture[]> {
    var headers = new HttpHeaders();
    headers.append('Accept', 'application/json');

    var url = this.baseUrl + 'fixtures';
    console.log('getFixtures', url);

    return this.http.get(url, { headers: headers })
      .map(res => <Fixture[]>res);
  }

  public getFixture(fixtureId : number) : Observable<Fixture> {
    var headers = new HttpHeaders();
    headers.append('Accept', 'application/json');

    var url = this.baseUrl + 'fixtures/' + fixtureId;
    console.log('getFixture', url);

    return this.http.get(url, { headers: headers })
      .map(res => <Fixture>res);
  }

  public signUpForFixture(fixtureId : number, userId : number, signUp : boolean) : Observable<Fixture> {
    var headers = new HttpHeaders();
    headers.append('Accept', 'application/json');

    var url = this.baseUrl + 'fixtures/signUp?' +
      'userId=' + userId +
      '&fixtureId=' + fixtureId +
      '&signUp=' + (signUp ? '1' : '0') ;
    console.log('signUpForFixture', url);

    return this.http.get(url, { headers: headers })
      .map(res => <Fixture>res);
  }

  public saveFixture(fixture : Fixture, userId : number) : Observable<Fixture> {
    var headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    headers.append('Content-type', 'application/json');
    var url = this.baseUrl + 'fixtures/save' +
      '?userId=' + userId;
    console.log('saveFixture', url);

    return this.http.post(url, JSON.stringify(fixture), { headers: headers })
      .map(res => <Fixture>res);
  }


  public getUsers() : Observable<User[]> {
    var headers = new HttpHeaders();
    headers.append('Accept', 'application/json');

    var url = this.baseUrl + 'users';
    console.log('getUsers', url);

    return this.http.get(url, { headers: headers })
      .map(res => <User[]>res);
  }

  public deleteMessage(messageId : number) : Observable<object> {
    var headers = new HttpHeaders();
    headers.append('Accept', 'application/json');

    var url = this.baseUrl + 'messages/delete?messageId=' + messageId;
    console.log('deleteMessage', url);

    return this.http.get(url, { headers: headers })
      .map(res => <object>res);

  }


  public getMessages() : Observable<Message[]> {
    var headers = new HttpHeaders();
    headers.append('Accept', 'application/json');

    var url = this.baseUrl + 'messages';
    console.log('getMessages', url);

    return this.http.get(url, { headers: headers })
      .map(res => <Message[]>res);

  }
  */

}
