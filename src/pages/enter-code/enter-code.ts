/**
 * Created by Administrator on 8/1/2017.
 */
import {NavController} from "ionic-angular";
import {Component} from "@angular/core";
import {ResetPasswordPage} from "../reset-password/reset-password";

@Component({
  selector: 'page-enter-code',
  templateUrl: 'enter-code.html'
})
export class EnterCodePage {

  constructor(public navCtrl: NavController) {

  }

  next(){
    this.navCtrl.push(ResetPasswordPage);
  }

}

