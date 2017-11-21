import { Component, Input } from "@angular/core";
import { NavController } from "ionic-angular";

import { CurrencyProvider } from "../../app/providers/currency.provider";

import { List } from "../../app/domains/list";

import { ListDetailPage } from "../../pages/list-detail/list-detail.page";

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
  
  constructor(private navController: NavController,
              public currencyProvider: CurrencyProvider) {
    // Do nothing.
  }
  
  onViewListDetail() {
    if (this.list.urn == "urn:list:blockchain-vcs") {
      this.navController.push(ListDetailPage, {
        "list": this.list  
      });      
    } else {
      alert("Looks like that's a mock...try Blockchain VCs"); 
    }
  }
  
}