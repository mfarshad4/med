import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {TermsPage} from "../pages/terms/terms";
import {SigninPage} from "../pages/signin/signin";
import {SignupPage} from "../pages/signup/signup";
import {ForgetPasswordPage} from "../pages/forget-password/forget-password";
import {EnterCodePage} from "../pages/enter-code/enter-code";
import {ResetPasswordPage} from "../pages/reset-password/reset-password";
import {ProvidersPage} from "../pages/providers/providers";
import {SelectStatePage} from "../pages/select-state/select-state";
import {ReservationPage} from "../pages/reservation/reservation";
import {VerificationPage} from "../pages/verification/verification";
import {NotificationAlertPage} from "../pages/notification-alert/notification-alert";
import {OnDemandPage} from "../pages/on-demand/on-demand";
import {AgmCoreModule} from "@agm/core";
import {Ionic2RatingModule} from "ionic2-rating";
import {StoreFrontsPage} from "../pages/storefronts/storefronts";
import {CategoriesPage} from "../pages/categories/categories";
import {RatingModalPage} from "../pages/rating-modal/rating-modal";
import {StoreModalPage} from "../pages/store-modal/store-modal";
import {ReviewRatingPage} from "../pages/review-rating/review-rating";
import {MenuPage} from "../pages/menu/menu";
import {ProductPage} from "../pages/product/product";
import {ProductModalPage} from "../pages/product-modal/product-modal";
import {CartPage} from "../pages/cart/cart";
import {CheckoutPage} from "../pages/checkout/checkout";
import {PaymentMethodPage} from "../pages/payment-method/payment-method";
import {PaymentInfoPage} from "../pages/payment-info/payment-info";
import {ConfirmationPage} from "../pages/confirmation/confirmation";
import {ProfilePage} from "../pages/profile/profile";
import {EditProfilePage} from "../pages/edit-profile/edit-profile";
import {OnlinePage} from "../pages/online/online";
import {OfflinePage} from "../pages/offline/offline";
import {FavoritePage} from "../pages/favorite/favorite";
import {VotePage} from "../pages/vote/vote";
import {GoOnlinePage} from "../pages/go-online/go-online";
import {AdvertisePage} from "../pages/advertise/advertise";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TermsPage,
    SigninPage,
    SignupPage,
    ForgetPasswordPage,
    EnterCodePage,
    ResetPasswordPage,
    ProvidersPage,
    SelectStatePage,
    ReservationPage,
    VerificationPage,
    NotificationAlertPage,
    OnDemandPage,
    StoreFrontsPage,
    CategoriesPage,
    RatingModalPage,
    StoreModalPage,
    ReviewRatingPage,
    MenuPage,
    ProductPage,
    ProductModalPage,
    CartPage,
    CheckoutPage,
    PaymentMethodPage,
    PaymentInfoPage,
    ConfirmationPage,
    ProfilePage,
    EditProfilePage,
    OnlinePage,
    OfflinePage,
    FavoritePage,
    VotePage,
    GoOnlinePage,
    AdvertisePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    Ionic2RatingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD7jRocUpBintu9hFwvKMbgX9V_YNJLzOg'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TermsPage,
    SigninPage,
    SignupPage,
    ForgetPasswordPage,
    EnterCodePage,
    ResetPasswordPage,
    ProvidersPage,
    SelectStatePage,
    ReservationPage,
    VerificationPage,
    NotificationAlertPage,
    OnDemandPage,
    StoreFrontsPage,
    CategoriesPage,
    RatingModalPage,
    StoreModalPage,
    ReviewRatingPage,
    MenuPage,
    ProductPage,
    ProductModalPage,
    CartPage,
    CheckoutPage,
    PaymentMethodPage,
    PaymentInfoPage,
    ConfirmationPage,
    ProfilePage,
    EditProfilePage,
    OnlinePage,
    OfflinePage,
    FavoritePage,
    VotePage,
    GoOnlinePage,
    AdvertisePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
