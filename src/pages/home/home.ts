import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import {MiapiProvider}  from "../../providers/miapi/miapi";




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  articulos

  constructor(public miapi: MiapiProvider, public platform:Platform, public navCtrl:NavController){

  

}

  ionViewDidLoad(){
this.miapi
.getArticles().subscribe(
  (out)=>{

      this.articulos= out.data;
      console.log("pero que pasa")
      console.log(this.articulos)
  },
  (error)=>{

    console.error(error);
  }
)
}}
