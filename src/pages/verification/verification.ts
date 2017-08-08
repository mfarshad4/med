/**
 * Created by Administrator on 8/1/2017.
 */
import {NavController, AlertController, ModalController} from "ionic-angular";
import {Component} from "@angular/core";
import {SelectStatePage} from "../select-state/select-state";
import {NotificationAlertPage} from "../notification-alert/notification-alert";
import {OnDemandPage} from "../on-demand/on-demand";

@Component({
  selector: 'page-verification',
  templateUrl: 'verification.html'
})
export class VerificationPage {

  constructor(public navCtrl: NavController,private alertCtrl:AlertController,private modalCtrl:ModalController) {

  }

  show_alert(){
    let modal = this.modalCtrl.create(NotificationAlertPage);
    modal.present();
  }

  demand(){
    this.navCtrl.push(OnDemandPage);
  }

  verification(){

  }

}

