import { Component } from "@angular/core";

import { UserProvider } from "../../app/providers/user.provider";

@Component({
  selector: "my-account-page",
  templateUrl: "my-account.page.html",
})
export class MyAccountPage {

  constructor(public userProvider: UserProvider) {
    // Do nothing.
  }

}