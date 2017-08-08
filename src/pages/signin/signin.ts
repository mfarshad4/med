import {NavController} from "ionic-angular";
import {Component} from "@angular/core";
import {SignupPage} from "../signup/signup";
import {ForgetPasswordPage} from "../forget-password/forget-password";
import {ProvidersPage} from "../providers/providers";
/**
 * Created by Administrator on 7/31/2017.
 */
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {

  constructor(public navCtrl: NavController) {

  }

  sign(){
    this.navCtrl.push(ProvidersPage);
  }

  signup(){
    this.navCtrl.push(SignupPage);
  }

  forget(){
    this.navCtrl.push(ForgetPasswordPage);
  }

}

