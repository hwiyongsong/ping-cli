import { Component } from "@angular/core";
import { MenuController, NavParams } from "ionic-angular";

import { PageProvider } from "../app/providers/page.provider";

import { HomePage } from "./home/home.page";
import { MessageBoxPage } from "./message-box/message-box.page";
import { MyAccountPage } from "./my-account/my-account.page";
import { PaymentHistoryPage } from "./payment-history/payment-history.page";

@Component({
  templateUrl: "main.page.html"
})
export class MainPage {
    
  private rootPage: any;
    
  constructor(params: NavParams,
              private menuController: MenuController,
              pageProvider: PageProvider) {
    this.rootPage = params.get("page") || HomePage;
    
    pageProvider.mainPage = this;
  }
  
  openHome() {
    this.open(HomePage);
  }
  
  openMessages() {
    this.open(MessageBoxPage);
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