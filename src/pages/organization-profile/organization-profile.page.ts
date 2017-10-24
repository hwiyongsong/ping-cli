import { Component } from "@angular/core";
import { NavParams } from "ionic-angular";

import { Account } from "../../app/domains/account";

@Component({
  selector: "organization-profile-page",
  templateUrl: "organization-profile.page.html",
})
export class OrganizationProfilePage {
    
  public account: Account;

  constructor(params: NavParams) {
    this.account = params.get("account");
  }

}