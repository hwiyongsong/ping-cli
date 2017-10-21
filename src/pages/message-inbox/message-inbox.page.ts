import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

import { InboxProvider } from "../../app/providers/inbox.provider";

import { AccountProfilePage } from "../account-profile/account-profile.page";
import { MessageThreadPage } from "../message-thread/message-thread.page";

import { Account } from "../../app/domains/account";
import { Thread } from "../../app/domains/thread";

@Component({
  selector: "message-inbox-page",
  templateUrl: "message-inbox.page.html",
})
export class MessageInboxPage {

  constructor(private navController: NavController, 
              public inboxProvider: InboxProvider) {
  }
  
  onViewAccountProfile(account: Account) {
    this.navController.push(AccountProfilePage, {
      "account": account
    }); 
  }

  onViewThread(thread: Thread) {
    this.navController.push(MessageThreadPage, {
      "thread": thread
    }); 
  }

}
