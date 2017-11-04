import { Component } from "@angular/core";
import { MenuController, NavController } from "ionic-angular";

import { HomePage } from "./home/home.page";
import { MessageInboxPage } from "./message-inbox/message-inbox.page";
import { MyAccountPage } from "./my-account/my-account.page";

@Component({
  templateUrl: "main.page.html"
})
export class MainPage {
    
  private rootPage: any;
    
  constructor(private menuController: MenuController,
              private navController: NavController) {
    this.rootPage = HomePage;
  }
  
  openHome() {
    this.rootPage = HomePage;
    this.menuController.close();
  }
  
  openInbox() {
    this.rootPage = MessageInboxPage;
    this.menuController.close();
  }

  openMyAccount() {
    this.rootPage = MyAccountPage;
    this.menuController.close();
  }

}