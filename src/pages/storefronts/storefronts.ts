/**
 * Created by Administrator on 8/5/2017.
 */

import {NavController, AlertController, ModalController} from "ionic-angular";
import {Component} from "@angular/core";
import {SelectStatePage} from "../select-state/select-state";
import {NotificationAlertPage} from "../notification-alert/notification-alert";
import {MenuPage} from "../menu/menu";

@Component({
  selector: 'page-storefronts',
  templateUrl: 'storefronts.html'
})
export class StoreFrontsPage {

  origin:any;
  zoom:number=8;
  markers:any=[];
  sinfo;

  constructor(public navCtrl: NavController,private alertCtrl:AlertController,private modalCtrl:ModalController) {
    this.origin={lat:36.79,lng:-119.72};
    this.sinfo='a';
    this.markers=[
      {lat:36.79,lng:-119.53,iconUrl:'assets/images/store-pin1.png',type:1},
      {lat:36.59,lng:-119.65,iconUrl:'assets/images/store-pin1.png'},
      {lat:36.43,lng:-118.53,iconUrl:'assets/images/store-pin1.png'},
      {lat:36.53,lng:-119.23,iconUrl:'assets/images/store-pin1.png'},
      {lat:36.89,lng:-119.63,iconUrl:'assets/images/store-pin1.png'},
    ]
  }

  go_menu(){
    this.navCtrl.push(MenuPage);
  }

}

