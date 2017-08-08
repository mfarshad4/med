/**
 * Created by Administrator on 8/6/2017.
 */

import {NavController, AlertController, ModalController} from "ionic-angular";
import {Component} from "@angular/core";
import {RatingModalPage} from "../rating-modal/rating-modal";
import {StoreModalPage} from "../store-modal/store-modal";
import {ReviewRatingPage} from "../review-rating/review-rating";

@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html'
})
export class CategoriesPage {

  sinfo;

  constructor(public navCtrl: NavController,private alertCtrl:AlertController,private modalCtrl:ModalController) {
    this.sinfo='a';
  }

  show_rating(){
    let modal = this.modalCtrl.create(RatingModalPage);
    modal.present();
  }

  show_store(){
    let modal = this.modalCtrl.create(StoreModalPage);
    modal.present();
  }

  show_detail(ev){
    this.navCtrl.push(ReviewRatingPage);
  }

}

