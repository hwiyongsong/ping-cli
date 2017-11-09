import { Component, Input } from "@angular/core";

import { BountyProvider } from "../../app/providers/bounty.provider";

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
  
  constructor(public bountyProvider: BountyProvider) {
    // Do nothing.
  }
  
}