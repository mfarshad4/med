/**
 * Created by Administrator on 8/6/2017.
 */
import {NavController, AlertController, ModalController} from "ionic-angular";
import {Component} from "@angular/core";

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

  sinfo;

  sub_flag:any=1;

  constructor(public navCtrl: NavController,private alertCtrl:AlertController,private modalCtrl:ModalController) {
    this.sinfo='a';
  }

  select_sub(b){
    console.log(b);
    this.sub_flag=b;
  }

}

