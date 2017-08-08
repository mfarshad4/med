/**
 * Created by Administrator on 8/8/2017.
 */
import {NavController, AlertController, ModalController} from "ionic-angular";
import {Component} from "@angular/core";
@Component({
  selector: 'page-offline',
  templateUrl: 'offline.html'
})
export class OfflinePage {

  origin:any;
  zoom:number=8;
  markers:any=[];

  constructor(public navCtrl: NavController,private alertCtrl:AlertController,private modalCtrl:ModalController) {
    this.origin={lat:36.79,lng:-119.72};
    this.markers=[
      {lat:36.79,lng:-119.53,iconUrl:'assets/images/myloc.png',type:1},
    ]
  }


}
