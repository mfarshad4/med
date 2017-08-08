import {NavController} from "ionic-angular";
import {Component} from "@angular/core";
import {SigninPage} from "../signin/signin";
/**
 * Created by Administrator on 7/31/2017.
 */
@Component({
  selector: 'page-terms',
  templateUrl: 'terms.html'
})
export class TermsPage {

  constructor(public navCtrl: NavController) {

  }

  next(){
    this.navCtrl.push(SigninPage);
  }

}
