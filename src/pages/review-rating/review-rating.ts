/**
 * Created by Administrator on 8/6/2017.
 */
import {NavController} from "ionic-angular";
import {Component} from "@angular/core";

@Component({
  selector: 'page-review-rating',
  templateUrl: 'review-rating.html'
})
export class ReviewRatingPage {

  sinfo:any;
  star5:any=110;
  star4:any=60;
  star3:any=30;
  star2:any=10;
  star1:any=0;

  constructor(public navCtrl: NavController) {
    this.sinfo='a';
  }

  back(){
    this.navCtrl.pop();
  }
}

