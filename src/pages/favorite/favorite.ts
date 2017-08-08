/**
 * Created by Administrator on 8/8/2017.
 */
import {NavController, AlertController, ModalController} from "ionic-angular";
import {Component} from "@angular/core";
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html'
})
export class FavoritePage {


  constructor(public navCtrl: NavController,private alertCtrl:AlertController,private modalCtrl:ModalController) {

  }
}
