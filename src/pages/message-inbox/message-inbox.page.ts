import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

import { InboxProvider } from "../../app/providers/inbox.provider";

import { MessageThreadPage } from "../message-thread/message-thread.page";

import { Thread } from "../../app/domains/thread";

@Component({
  selector: "message-inbox-page",
  templateUrl: "message-inbox.page.html",
})
export class MessageInboxPage {

  constructor(private navController: NavController, 
              public inboxProvider: InboxProvider) {
  }

  onViewThread(thread: Thread) {
    this.navController.push(MessageThreadPage, {
      "thread": thread
    }); 
  }

}
