/**
 * Created by Administrator on 8/6/2017.
 */
import {NavController, AlertController, ModalController} from "ionic-angular";
import {Component} from "@angular/core";
import {ProductModalPage} from "../product-modal/product-modal";

@Component({
  selector: 'page-product',
  templateUrl: 'product.html'
})
export class ProductPage {

  constructor(public navCtrl: NavController,private alertCtrl:AlertController,private modalCtrl:ModalController) {
  }

  show_dialog(){
    let modal = this.modalCtrl.create(ProductModalPage);
    modal.present();
  }

}

