/**
 * Created by Administrator on 8/6/2017.
 */
import {NavController, AlertController, ModalController, ViewController} from "ionic-angular";
import {Component} from "@angular/core";
import {SelectStatePage} from "../select-state/select-state";

@Component({
  selector: 'page-rating-modal',
  templateUrl: 'rating-modal.html'
})
export class RatingModalPage {

  constructor(public viewCtrl: ViewController) {

  }

  close(){
    this.viewCtrl.dismiss();
  }



}

