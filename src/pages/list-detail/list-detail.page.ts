import { Component } from "@angular/core";
import { NavParams } from "ionic-angular";

import { CurrencyProvider } from "../../app/providers/currency.provider";

import { List } from "../../app/domains/list";

@Component({
  selector: "list-detail-page",
  templateUrl: "list-detail.page.html",
})
export class ListDetailPage {
    
  public list: List;

  constructor(params: NavParams,
              public currencyProvider: CurrencyProvider) {
    this.list = params.get("list");
  }

}
