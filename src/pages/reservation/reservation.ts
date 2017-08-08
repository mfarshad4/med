/**
 * Created by Administrator on 8/1/2017.
 */

import {NavController} from "ionic-angular";
import {Component} from "@angular/core";
import {VerificationPage} from "../verification/verification";

@Component({
  selector: 'page-reservation',
  templateUrl: 'reservation.html'
})
export class ReservationPage {

  sinfo:any;
  constructor(public navCtrl: NavController) {
    this.sinfo='a';
  }

  verification(){
    this.navCtrl.push(VerificationPage);
  }

}

