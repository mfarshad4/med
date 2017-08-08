/**
 * Created by Administrator on 8/1/2017.
 */

import {NavController} from "ionic-angular";
import {Component} from "@angular/core";
import {SelectStatePage} from "../select-state/select-state";

@Component({
  selector: 'page-providers',
  templateUrl: 'providers.html'
})
export class ProvidersPage {

  constructor(public navCtrl: NavController) {

  }

  go_state(){
    this.navCtrl.push(SelectStatePage);
  }

}

