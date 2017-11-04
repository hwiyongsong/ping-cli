import { Component } from "@angular/core";
import { Platform } from "ionic-angular";
import { Keyboard } from "@ionic-native/keyboard";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { MainPage } from "../pages/main.page";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
    
  public rootPage: any;

  constructor(platform: Platform, 
              keyboard: Keyboard,
              splashScreen: SplashScreen,
              statusBar: StatusBar) {
    platform.ready().then(() => {
      keyboard.disableScroll(true);
      
      splashScreen.hide();
      
      statusBar.styleDefault();
      statusBar.overlaysWebView(false);
      
      this.rootPage = MainPage;
    });
  }
  
}