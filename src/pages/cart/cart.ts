/**
 * Created by Administrator on 8/6/2017.
 */
import {NavController, AlertController, ModalController} from "ionic-angular";
import {Component} from "@angular/core";
import {RatingModalPage} from "../rating-modal/rating-modal";
import {StoreModalPage} from "../store-modal/store-modal";
import {ReviewRatingPage} from "../review-rating/review-rating";
import {CheckoutPage} from "../checkout/checkout";

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {

  items:any=[];
  coin:any={};
  quan:any={};

  constructor(public navCtrl: NavController,private alertCtrl:AlertController) {
    this.items=[
      {title:'Salads and Wraps',amount:1,price:5.10},
      {title:'Chips, movie tickets and many more items',amount:1,price:10.00},
      {title:'Salads and Wraps',amount:1,price:5.10},
      {title:'Chips, movie tickets and many more items',amount:1,price:10.00},
    ];

    for(var i=0;i<this.items.length;i++){
      this.items[i].mprice=this.items[i].amount*this.items[i].price;
    }

    this.coin={amount:1};
    this.quan={amount:1,price:2};
  }

  add(index){
    this.items[index].amount=this.items[index].amount+1;
    this.items[index].mprice=this.items[index].mprice+this.items[index].price;
  }

  remove(index){
    if(this.items[index].amount==1)return;
    this.items[index].amount=this.items[index].amount-1;
    this.items[index].mprice=this.items[index].mprice-this.items[index].price;
  }

  add_coin(){
    this.coin.amount=this.coin.amount+1;
  }

  remove_coin(index){
    if(this.coin.amount==1)return;
    this.coin.amount=this.coin.amount-1;
  }

  add_quan(){
    this.quan.amount=this.quan.amount+1;

  }

  remove_quan(index){
    if(this.quan.amount==1)return;
    this.quan.amount=this.quan.amount-1;
  }


  go_checkout(){
    this.navCtrl.push(CheckoutPage);
  }
}

