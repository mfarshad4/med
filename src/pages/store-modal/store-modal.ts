/**
 * Created by Administrator on 8/6/2017.
 */
import {NavController, AlertController, ModalController, ViewController} from "ionic-angular";
import {Component} from "@angular/core";
import {SelectStatePage} from "../select-state/select-state";

@Component({
  selector: 'page-store-modal',
  templateUrl: 'store-modal.html'
})
export class StoreModalPage {

  constructor(public viewCtrl: ViewController) {

  }

  close(){
    this.viewCtrl.dismiss();
  }



}
