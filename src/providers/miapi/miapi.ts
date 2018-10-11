import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MiapiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MiapiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MiapiProvider Provider');
  }
  getArticles(){
    return this.http.get("http://apiclase2018.herokuapp.com/api/v1/articles") 


  }

}
