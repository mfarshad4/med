/**
 * Created by Administrator on 8/1/2017.
 */
import {NavController, AlertController, ModalController, ViewController} from "ionic-angular";
import {Component} from "@angular/core";
import {SelectStatePage} from "../select-state/select-state";

@Component({
  selector: 'page-notification-alert',
  templateUrl: 'notification-alert.html'
})
export class NotificationAlertPage {

  constructor(public viewCtrl: ViewController) {

  }

  close(){
    this.viewCtrl.dismiss();
  }



}

