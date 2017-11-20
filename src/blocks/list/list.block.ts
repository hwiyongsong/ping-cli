import { Component, Input } from "@angular/core";

import { CurrencyProvider } from "../../app/providers/currency.provider";

import { List } from "../../app/domains/list";

@Component({
  selector: "list-block",
  templateUrl: "list.block.html"
})
export class ListBlock {

  @Input()
  public list: List;
  
  @Input()
  public layout: string;
  
  @Input()
  public showPricing: boolean = false;
  
  constructor(public currencyProvider: CurrencyProvider) {
    // Do nothing.
  }
  
}