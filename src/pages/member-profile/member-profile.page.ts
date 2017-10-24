import { Component } from "@angular/core";
import { NavParams } from "ionic-angular";

import { Account } from "../../app/domains/account";

@Component({
  selector: "member-profile-page",
  templateUrl: "member-profile.page.html",
})
export class MemberProfilePage {
    
  public account: Account;

  constructor(params: NavParams) {
    this.account = params.get("account");
  }

}
