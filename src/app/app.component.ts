import {Component, ViewChild} from '@angular/core';
import {Platform, Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import {TermsPage} from "../pages/terms/terms";
import {OnDemandPage} from "../pages/on-demand/on-demand";
import {StoreFrontsPage} from "../pages/storefronts/storefronts";
import {CategoriesPage} from "../pages/categories/categories";
import {ProductPage} from "../pages/product/product";
import {CartPage} from "../pages/cart/cart";
import {ConfirmationPage} from "../pages/confirmation/confirmation";
import {ProfilePage} from "../pages/profile/profile";
import {OnlinePage} from "../pages/online/online";
import {OfflinePage} from "../pages/offline/offline";
import {FavoritePage} from "../pages/favorite/favorite";
import {VotePage} from "../pages/vote/vote";
import {GoOnlinePage} from "../pages/go-online/go-online";
import {AdvertisePage} from "../pages/advertise/advertise";
import {MenuPage} from "../pages/menu/menu";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage:any = TermsPage;

  pages: Array<{title: string, component: any,icon:any}>;

  child_flag:any=0;
  header_title:any;

  constructor(platform: Platform,statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    // {title:'', component:HomePage,icon:'ios-home-outline'},

    // this.pages = [
    //   {title:'Provide',icon:'ios-home-outline'},
    //
    //
    // ];

  }

  show_children(index){
    this.child_flag=index;
    if(index==1)this.header_title='Providers';
    if(index==6)this.header_title='Settings';
    if(index==7)this.header_title='Driver Documents';
    if(index==8)this.header_title='Earning & Fee\'s';
  }

  go_demand(){
    this.child_flag=0;
    this.nav.setRoot(OnDemandPage);
  }

  go_store(){
    this.child_flag=0;
    this.nav.setRoot(StoreFrontsPage);
  }

  go_doctor(){
    console.log(11);
    this.child_flag=0;
    this.nav.setRoot(CategoriesPage);
  }

  go_product(){
    this.nav.setRoot(ProductPage);
  }

  go_cart(){
    this.nav.setRoot(CartPage);
  }

  go_confirmation(){
    this.nav.setRoot(OnlinePage);
  }

  go_confirm(){
    this.nav.setRoot(ConfirmationPage);
  }

  go_profile(){
    this.nav.setRoot(ProfilePage);
  }

  go_favorite(){
    this.nav.setRoot(FavoritePage);
  }

  go_online(){
    this.nav.setRoot(GoOnlinePage);
  }

  go_vote(){
    this.nav.setRoot(VotePage);
  }

  go_ad(){
    this.nav.setRoot(AdvertisePage);
  }

  go_offline(){
    this.nav.setRoot(OfflinePage);
  }

  back(){
    if(this.child_flag==8)this.child_flag=7;
    else if(this.child_flag==7)this.child_flag=6;
    else this.child_flag=0;

    if(this.child_flag==1)this.header_title='Providers';
    if(this.child_flag==6)this.header_title='Settings';
    if(this.child_flag==7)this.header_title='Driver Documents';
  }

  go_menu(){
    this.nav.setRoot(MenuPage);
  }
}
