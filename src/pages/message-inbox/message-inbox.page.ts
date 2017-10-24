import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

import { InboxProvider } from "../../app/providers/inbox.provider";

import { MemberProfilePage } from "../member-profile/member-profile.page";
import { MessageAdVideoPage } from "../message-ad-video/message-ad-video.page";
import { MessageThreadPage } from "../message-thread/message-thread.page";
import { OrganizationProfilePage } from "../organization-profile/organization-profile.page";

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
    if (account.urn.startsWith("urn:member:")) {
      this.navController.push(MemberProfilePage, {
        "account": account
      });       
    }
    
    if (account.urn.startsWith("urn:organization:")) {
      this.navController.push(OrganizationProfilePage, {
        "account": account
      });  
    }
  }

  onViewThread(thread: Thread) {
    this.navController.push(MessageThreadPage, {
      "thread": thread
    }); 
  }
  
  onViewAdVideo() {
    this.navController.push(MessageAdVideoPage, {
      "url": "https://www.youtube.com/embed/Cp10_PygJ4o"
    }); 
  }

}