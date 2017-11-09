import { Component, ViewChild } from "@angular/core";
import { Content, NavController, NavParams } from "ionic-angular";

import { AccountProvider } from "../../app/providers/account.provider";
import { BountyProvider } from "../../app/providers/bounty.provider";

import { MemberProfilePage } from "../member-profile/member-profile.page";

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
  public replyable: boolean = false;
  
  @ViewChild(Content) content: Content;
  
  constructor(params: NavParams,
              private navController: NavController,
              public accountProvider: AccountProvider,
              public bountyProvider: BountyProvider) {
    this.thread = params.get("thread");
    this.replyable = this.thread.messages.length > 0;
  }
  
  onViewAccountProfile(account: Account) {
    this.navController.push(MemberProfilePage, {
      "account": account
    });
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
  
  onReplyable() {
    this.replyable = true; 
  }
  
  onViewVideo() {
    alert("Looks like that's a mock..."); 
  }

  private clearReply() {
    this.reply = "";
  }

}