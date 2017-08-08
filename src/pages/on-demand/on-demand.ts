/**
 * Created by Administrator on 8/2/2017.
 */

import {NavController, AlertController, ModalController} from "ionic-angular";
import {Component} from "@angular/core";
import {SelectStatePage} from "../select-state/select-state";
import {NotificationAlertPage} from "../notification-alert/notification-alert";

@Component({
  selector: 'page-on-demand',
  templateUrl: 'on-demand.html'
})
export class OnDemandPage {

  origin:any;
  zoom:number=8;
  markers:any=[];
  sinfo;

  constructor(public navCtrl: NavController,private alertCtrl:AlertController,private modalCtrl:ModalController) {
    this.origin={lat:36.79,lng:-119.72};
    this.sinfo='a';
    this.markers=[
      {lat:36.79,lng:-119.53,iconUrl:'assets/images/myloc.png',type:1},
      {lat:36.59,lng:-119.65,iconUrl:'assets/images/mpin-1.png'},
      {lat:36.43,lng:-118.53,iconUrl:'assets/images/mpin-1.png'},
      {lat:36.53,lng:-119.23,iconUrl:'assets/images/pump.png'},
      {lat:36.89,lng:-119.63,iconUrl:'assets/images/pump.png'},
    ]
  }

  show_alert(){
    let modal = this.modalCtrl.create(NotificationAlertPage);
    modal.present();
  }

  verification(){

  }

}

