import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

import { InboxProvider } from "../../app/providers/inbox.provider";

import { MessageInboxPage } from "../../pages/message-inbox/message-inbox.page";

@Component({
  selector: "chrome-block",
  templateUrl: "chrome.block.html"
})
export class ChromeBlock {

  constructor(private navController: NavController, 
              public inboxProvider: InboxProvider) {
  }
  
  openInbox() {
    this.navController.push(MessageInboxPage);
  }
  
}