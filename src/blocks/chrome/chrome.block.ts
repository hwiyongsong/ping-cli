import { Component } from "@angular/core";

import { MessageProvider } from "../../app/providers/message.provider";
import { PageProvider } from "../../app/providers/page.provider";

@Component({
  selector: "chrome-block",
  templateUrl: "chrome.block.html"
})
export class ChromeBlock {

  constructor(public messageProvider: MessageProvider,
              private pageProvider: PageProvider) {
  }
  
  openMessages() {
    this.pageProvider.mainPage.onViewMessages();
  }
  
}