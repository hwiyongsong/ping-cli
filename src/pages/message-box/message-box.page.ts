import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

import { InboxProvider } from "../../app/providers/inbox.provider";

import { MemberProfilePage } from "../member-profile/member-profile.page";
import { MessageThreadPage } from "../message-thread/message-thread.page";
import { MyAccountPage } from "../my-account/my-account.page";

import { Account } from "../../app/domains/account";
import { Thread } from "../../app/domains/thread";

@Component({
  selector: "message-box-page",
  templateUrl: "message-box.page.html",
})
export class MessageBoxPage {

  constructor(private navController: NavController, 
              public inboxProvider: InboxProvider) {
  }
  
  onViewAccountProfile(account: Account) {
    this.navController.push(MemberProfilePage, {
      "account": account
    });
  }
  
  onViewMyAccount() {
    this.navController.push(MyAccountPage);
  }

  onViewThread(thread: Thread) {
    this.navController.push(MessageThreadPage, {
      "thread": thread
    }); 
  }

}