/**
 * Created by Administrator on 8/1/2017.
 */
import {NavController} from "ionic-angular";
import {Component} from "@angular/core";
import {ReservationPage} from "../reservation/reservation";

@Component({
  selector: 'page-select-state',
  templateUrl: 'select-state.html'
})
export class SelectStatePage {

  constructor(public navCtrl: NavController) {

  }

  next(){
    this.navCtrl.setRoot(ReservationPage);
  }

}

