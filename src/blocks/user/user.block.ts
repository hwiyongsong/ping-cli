import { Component, Input } from "@angular/core";

import { CurrencyProvider } from "../../app/providers/currency.provider";

import { User } from "../../app/domains/user";

@Component({
  selector: "user-block",
  templateUrl: "user.block.html"
})
export class UserBlock {

  @Input()
  public user: User;
  
  @Input()
  public layout: string;
  
  constructor(public currencyProvider: CurrencyProvider) {
    // Do nothing.
  }
  
}