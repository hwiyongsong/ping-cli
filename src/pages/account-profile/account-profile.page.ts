import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

import { Account } from "../../app/domains/account";

@Component({
  selector: "account-profile-page",
  templateUrl: "account-profile.page.html",
})
export class AccountProfilePage {
    
  public account: Account;

  constructor(params: NavParams) {
    this.account = params.get("account");
  }

}
