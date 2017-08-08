/**
 * Created by Administrator on 8/1/2017.
 */
import {NavController} from "ionic-angular";
import {Component} from "@angular/core";
import {SignupPage} from "../signup/signup";
import {SigninPage} from "../signin/signin";

@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html'
})
export class ResetPasswordPage {

  constructor(public navCtrl: NavController) {

  }

  save(){
    this.navCtrl.setRoot(SigninPage);
  }

}

