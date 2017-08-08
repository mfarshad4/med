/**
 * Created by Administrator on 8/7/2017.
 */
import {NavController, AlertController, ModalController} from "ionic-angular";
import {Component} from "@angular/core";
import {EditProfilePage} from "../edit-profile/edit-profile";
import {OnlinePage} from "../online/online";

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  origin:any;
  zoom:number=8;
  markers:any=[];

  constructor(public navCtrl: NavController,private alertCtrl:AlertController,private modalCtrl:ModalController) {
    this.origin={lat:36.79,lng:-119.72};
    this.markers=[
      {lat:36.79,lng:-119.53,iconUrl:'assets/images/7.png',type:1},
      {lat:36.59,lng:-119.65,iconUrl:'assets/images/8.png'},
      {lat:36.43,lng:-118.53,iconUrl:'assets/images/9.png'},
      {lat:36.53,lng:-119.23,iconUrl:'assets/images/10.png'},
      {lat:36.89,lng:-119.63,iconUrl:'assets/images/7.png'},
    ]
  }

  go_edit(){
    this.navCtrl.push(EditProfilePage);
  }

  go_online(){
    this.navCtrl.push(OnlinePage);
  }
}

