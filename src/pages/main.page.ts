import { Component } from "@angular/core";
import { MenuController, NavParams } from "ionic-angular";

import { AccountProvider } from "../app/providers/account.provider";
import { CurrencyProvider } from "../app/providers/currency.provider";
import { InboxProvider } from "../app/providers/inbox.provider";
import { PageProvider } from "../app/providers/page.provider";

import { ConfigurationPage } from "./configuration/configuration.page";
import { ExplorePage } from "./explore/explore.page";
import { MessageBoxPage } from "./message-box/message-box.page";

@Component({
  selector: "main-page",
  templateUrl: "main.page.html"
})
export class MainPage {
    
  private rootPage: any;
    
  constructor(params: NavParams,
              private menuController: MenuController,
              public accountProvider: AccountProvider,
              public currencyProvider: CurrencyProvider,
              public inboxProvider: InboxProvider,
              pageProvider: PageProvider) {
    this.rootPage = params.get("page") || ExplorePage;
    
    pageProvider.mainPage = this;
  }
  
  onViewExplore() {
    this.open(ExplorePage);
  }
    
  onViewMyNetwork() {
   alert("Looks like that's a mock...");
  }

  onViewMessages() {
    this.open(MessageBoxPage);
  }
  
  onViewPaymentsReceived() {
    alert("Looks like that's a mock...");
  }

  onViewSettings() {
    alert("Looks like that's a mock...");
  }
  
  onViewConfiguration() {
    this.open(ConfigurationPage);
  }
  
  private open(page: any) {
    this.rootPage = page;
    this.menuController.close();
  }

}