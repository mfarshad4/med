/**
 * Created by Administrator on 8/7/2017.
 */
import {NavController, AlertController, ModalController} from "ionic-angular";
import {Component} from "@angular/core";
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html'
})
export class EditProfilePage {


  constructor(public navCtrl: NavController,private alertCtrl:AlertController,private modalCtrl:ModalController) {

  }
}
