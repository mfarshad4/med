/**
 * Created by Administrator on 8/8/2017.
 */
import {NavController, AlertController, ModalController} from "ionic-angular";
import {Component} from "@angular/core";
@Component({
  selector: 'page-vote',
  templateUrl: 'vote.html'
})
export class VotePage {


  constructor(public navCtrl: NavController,private alertCtrl:AlertController,private modalCtrl:ModalController) {

  }
}
