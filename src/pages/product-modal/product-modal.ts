/**
 * Created by Administrator on 8/6/2017.
 */
import {NavController, AlertController, ModalController, ViewController} from "ionic-angular";
import {Component} from "@angular/core";
import {SelectStatePage} from "../select-state/select-state";

@Component({
  selector: 'page-product-modal',
  templateUrl: 'product-modal.html'
})
export class ProductModalPage {

  constructor(public viewCtrl: ViewController) {

  }

  close(){
    this.viewCtrl.dismiss();
  }



}

