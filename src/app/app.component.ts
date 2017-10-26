import { Component, ViewChild } from "@angular/core";
import { Nav, Platform } from "ionic-angular";
import { Keyboard } from "@ionic-native/keyboard";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { MessageInboxPage } from "../pages/message-inbox/message-inbox.page";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
    
  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform, 
              keyboard: Keyboard,
              splashScreen: SplashScreen,
              statusBar: StatusBar) {
    platform.ready().then(() => {
      keyboard.disableScroll(true);
      
      splashScreen.hide();
      statusBar.styleDefault();
      statusBar.overlaysWebView(false);
      
      this.nav.setRoot(MessageInboxPage);
    });
  }
  
}