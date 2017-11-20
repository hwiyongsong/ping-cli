import { Component, Input } from "@angular/core";
import { NavController } from "ionic-angular";

import { CurrencyProvider } from "../../app/providers/currency.provider";

import { User } from "../../app/domains/user";

import { UserProfilePage } from "../../pages/user-profile/user-profile.page";

@Component({
  selector: "user-block",
  templateUrl: "user.block.html"
})
export class UserBlock {

  @Input()
  public user: User;
  
  @Input()
  public layout: string;
  
  @Input()
  public showPricing: boolean = false;
  
  constructor(private navController: NavController,
              public currencyProvider: CurrencyProvider) {
    // Do nothing.
  }
  
  onViewUserProfile() {
    this.navController.push(UserProfilePage, {
      "user": this.user
    });
  }
  
}