import { Component } from "@angular/core";
import { MenuController, NavParams } from "ionic-angular";

import { CurrencyProvider } from "../app/providers/currency.provider";
import { MessageProvider } from "../app/providers/message.provider";
import { PageProvider } from "../app/providers/page.provider";
import { UserProvider } from "../app/providers/user.provider";

import { ConfigurationPage } from "./configuration/configuration.page";
import { ExplorePage } from "./explore/explore.page";
import { MessageBoxPage } from "./message-box/message-box.page";
import { NetworkPage } from "./network/network.page";
import { SettingsPage } from "./settings/settings.page";
import { WalletPage } from "./wallet/wallet.page";

@Component({
  selector: "main-page",
  templateUrl: "main.page.html"
})
export class MainPage {
    
  private rootPage: any;
    
  constructor(params: NavParams,
              private menuController: MenuController,
              public currencyProvider: CurrencyProvider,
              public messageProvider: MessageProvider,
              public userProvider: UserProvider,
              pageProvider: PageProvider) {
    this.rootPage = params.get("page") || ExplorePage;
    
    pageProvider.mainPage = this;
  }
  
  onViewExplore() {
    this.open(ExplorePage);
  }
    
  onViewMyNetwork() {
   this.open(NetworkPage);
  }

  onViewMessages() {
    this.open(MessageBoxPage);
  }
  
  onViewWallet() {
    this.open(WalletPage);
  }

  onViewSettings() {
    this.open(SettingsPage);
  }
  
  onViewConfiguration() {
    this.open(ConfigurationPage);
  }
  
  private open(page: any) {
    this.rootPage = page;
    this.menuController.close();
  }

}