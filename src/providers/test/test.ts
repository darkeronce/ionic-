import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TestProvider {

  private endpoint : any = "https://my-json-server.typicode.com/HaibuSolutions/prueba-tecnica-sf/user";

  constructor(public http: HttpClient) {
    console.log('Hello TestProvider Provider');
  }

  getUsers(){
    return new Promise((resolve, reject) => {
      this.http.get(this.endpoint).subscribe(res => {
        resolve(res)
      }, err => {
        reject(err);
      });
    });
  }  

}
