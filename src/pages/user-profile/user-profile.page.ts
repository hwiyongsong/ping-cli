import { Component } from "@angular/core";
import { NavParams } from "ionic-angular";

import { CurrencyProvider } from "../../app/providers/currency.provider";

import { User } from "../../app/domains/user";

@Component({
  selector: "user-profile-page",
  templateUrl: "user-profile.page.html",
})
export class UserProfilePage {
    
  public user: User;

  constructor(params: NavParams,
              public currencyProvider: CurrencyProvider) {
    this.user = params.get("user");
  }

}
