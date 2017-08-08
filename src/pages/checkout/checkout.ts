/**
 * Created by Administrator on 8/6/2017.
 */
import {NavController, AlertController, ModalController} from "ionic-angular";
import {Component} from "@angular/core";
import {RatingModalPage} from "../rating-modal/rating-modal";
import {StoreModalPage} from "../store-modal/store-modal";
import {ReviewRatingPage} from "../review-rating/review-rating";
import {PaymentMethodPage} from "../payment-method/payment-method";

@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html'
})
export class CheckoutPage {

  items:any=[];

  constructor(public navCtrl: NavController,private alertCtrl:AlertController) {
    this.items=[
      {title:'Salads and Wraps',amount:1,price:5.10},
      {title:'Dummy Item',amount:1,price:10.05},
      {title:'Other items regular',amount:1,price:5.12},
      {title:'Beans and salad',amount:1,price:5.10},
      {title:'Lorem Dummy Text',amount:2,price:10.00},
      {title:'Salads and Wraps',amount:1,price:5.10}
    ];
  }

  go_pay(){
    this.navCtrl.push(PaymentMethodPage);
  }



}

