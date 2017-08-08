/**
 * Created by Administrator on 8/8/2017.
 */
import {NavController, AlertController, ModalController} from "ionic-angular";
import {Component} from "@angular/core";
@Component({
  selector: 'page-go-online',
  templateUrl: 'go-online.html'
})
export class GoOnlinePage {

  sinfo:any;

  constructor(public navCtrl: NavController,private alertCtrl:AlertController,private modalCtrl:ModalController) {
    this.sinfo='a';
  }


}
