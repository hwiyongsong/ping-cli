import { Component } from "@angular/core";

import { InboxProvider } from "../../app/providers/inbox.provider";
import { PageProvider } from "../../app/providers/page.provider";

@Component({
  selector: "chrome-block",
  templateUrl: "chrome.block.html"
})
export class ChromeBlock {

  constructor(public inboxProvider: InboxProvider,
              private pageProvider: PageProvider) {
  }
  
  openMessages() {
    this.pageProvider.mainPage.onViewMessages();
  }
  
}