/**
 * Created by Administrator on 8/6/2017.
 */
import {NavController, AlertController, ModalController} from "ionic-angular";
import {Component} from "@angular/core";
import {RatingModalPage} from "../rating-modal/rating-modal";
import {StoreModalPage} from "../store-modal/store-modal";
import {ReviewRatingPage} from "../review-rating/review-rating";

@Component({
  selector: 'page-payment-info',
  templateUrl: 'payment-info.html'
})
export class PaymentInfoPage {

  constructor(public navCtrl: NavController,private alertCtrl:AlertController) {
  }

  back(){
    this.navCtrl.pop();
  }

}

