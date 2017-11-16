import { Component, Input } from "@angular/core";

import { CurrencyProvider } from "../../app/providers/currency.provider";

import { Account } from "../../app/domains/account";

@Component({
  selector: "member-block",
  templateUrl: "member.block.html"
})
export class MemberBlock {

  @Input()
  public account: Account;
  
  @Input()
  public layout: string;
  
  constructor(public currencyProvider: CurrencyProvider) {
    // Do nothing.
  }
  
}