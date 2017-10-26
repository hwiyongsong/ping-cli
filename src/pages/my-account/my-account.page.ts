import { Component } from "@angular/core";

import { AccountProvider } from "../../app/providers/account.provider";

@Component({
  selector: "my-account-page",
  templateUrl: "my-account.page.html",
})
export class MyAccountPage {

  constructor(public accountProvider: AccountProvider) {
    // Do nothing.
  }

}