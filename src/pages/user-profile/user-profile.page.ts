import { Component } from "@angular/core";
import { NavParams } from "ionic-angular";

import { User } from "../../app/domains/user";

@Component({
  selector: "user-profile-page",
  templateUrl: "user-profile.page.html",
})
export class UserProfilePage {
    
  public user: User;

  constructor(params: NavParams) {
    this.user = params.get("user");
  }

}
