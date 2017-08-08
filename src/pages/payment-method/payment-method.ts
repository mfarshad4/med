/**
 * Created by Administrator on 8/6/2017.
 */
import {NavController, AlertController, ModalController} from "ionic-angular";
import {Component} from "@angular/core";
import {RatingModalPage} from "../rating-modal/rating-modal";
import {StoreModalPage} from "../store-modal/store-modal";
import {ReviewRatingPage} from "../review-rating/review-rating";
import {PaymentInfoPage} from "../payment-info/payment-info";

@Component({
  selector: 'page-payment-method',
  templateUrl: 'payment-method.html'
})
export class PaymentMethodPage {

  pmethod:any;
  constructor(public navCtrl: NavController,private alertCtrl:AlertController) {
    this.pmethod='a';
  }

  continue(){
    this.navCtrl.push(PaymentInfoPage);
  }

  back(){
    this.navCtrl.pop();
  }

}

