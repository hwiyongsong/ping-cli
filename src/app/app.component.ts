import { Component, ViewChild } from "@angular/core";
import { Nav, Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { MessageInboxPage } from "../pages/message-inbox/message-inbox.page";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
    
  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      statusBar.overlaysWebView(false);
      splashScreen.hide();
      
      this.nav.setRoot(MessageInboxPage);
    });
  }
  
}