import {NavController} from "ionic-angular";
import {Component} from "@angular/core";
import {SignupPage} from "../signup/signup";
import {EnterCodePage} from "../enter-code/enter-code";
/**
 * Created by Administrator on 7/31/2017.
 */
@Component({
  selector: 'page-forget-password',
  templateUrl: 'forget-password.html'
})
export class ForgetPasswordPage {

  constructor(public navCtrl: NavController) {

  }

  reset(){
    this.navCtrl.push(EnterCodePage);
  }

}

