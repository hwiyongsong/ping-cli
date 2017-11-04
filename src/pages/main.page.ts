import { Component } from "@angular/core";
import { MenuController, NavParams } from "ionic-angular";

import { HomePage } from "./home/home.page";
import { MessageInboxPage } from "./message-inbox/message-inbox.page";
import { MyAccountPage } from "./my-account/my-account.page";
import { PaymentHistoryPage } from "./payment-history/payment-history.page";

@Component({
  templateUrl: "main.page.html"
})
export class MainPage {
    
  private rootPage: any;
    
  constructor(params: NavParams,
              private menuController: MenuController) {
    this.rootPage = params.get("page") || HomePage;
  }
  
  openHome() {
    this.open(HomePage);
  }
  
  openInbox() {
    this.open(MessageInboxPage);
  }
  
  openPaymentHistory() {
    this.open(PaymentHistoryPage);
  }

  openMyAccount() {
    this.open(MyAccountPage);
  }
  
  private open(page: any) {
    this.rootPage = page;
    this.menuController.close();
  }

}