import { Component, ViewChild } from "@angular/core";
import { Content, NavController, NavParams } from "ionic-angular";

import { AccountProvider } from "../../app/providers/account.provider";

import { MemberProfilePage } from "../member-profile/member-profile.page";
import { OrganizationProfilePage } from "../organization-profile/organization-profile.page";

import { Account } from "../../app/domains/account";
import { Message } from "../../app/domains/message";
import { Thread } from "../../app/domains/thread";

import { StringUtils } from "../../app/utils/string-utils";

@Component({
  selector: "message-thread-page",
  templateUrl: "message-thread.page.html",
})
export class MessageThreadPage {

  public thread: Thread;
  public reply: string;
  
  @ViewChild(Content) content: Content;
  
  constructor(params: NavParams,
              private navController: NavController,
              public accountProvider: AccountProvider) {
    this.thread = params.get("thread");
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
  
  onReply() {
    if (this.reply) {
      let message = new Message();
      message.urn = "urn:message:" + StringUtils.generateUUID();
      message.from = this.accountProvider.currentAccount;
      message.body = this.reply;
      message.createdAt = "A moment ago";
      
      this.thread.addMessage(message);
      this.clearReply();
      
      setTimeout(() => {
        this.content.scrollToBottom();        
      }, 400);
    }
  }

  private clearReply() {
    this.reply = "";
  }

}