/**
 * Created by Administrator on 8/1/2017.
 */
import {NavController} from "ionic-angular";
import {Component} from "@angular/core";
/**
 * Created by Administrator on 7/31/2017.
 */
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  constructor(public navCtrl: NavController) {

  }


  signup(){

  }

  sign(){
    this.navCtrl.pop();
  }

}

