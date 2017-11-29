import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppUpdate } from '@ionic-native/app-update';
import { WelcomePage } from '../pages/welcome/welcome';

import { ProductsPage } from '../pages/products/products';
import { DistPage } from '../pages/dist/dist';
import { ProductDetailPage } from '../pages/product-detail/product-detail';
import { CartPage } from '../pages/cart/cart';
import { CheckoutPage } from '../pages/checkout/checkout';
import { OrderPage } from '../pages/order/order';
import { MpesaPage } from '../pages/payments/mpesa';
import { LoginComponent } from '../pages/login/login';
import { RegisterComponent } from '../pages/register/register';
import { LandingComponent } from '../pages/landing/land';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;


  rootPage: any = WelcomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen) {
    this.initializeApp();

    //const updateUrl = 'http://your-remote-api.com/update.xml';
    //this.appUpdate.checkAppUpdate(updateUrl);

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Distributors', component: DistPage },
      { title: 'Products', component: ProductsPage },
      { title: 'cart', component: CartPage },
      { title: 'checkout', component: CheckoutPage },
      { title: 'order', component: OrderPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
