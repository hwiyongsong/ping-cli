import { Component } from "@angular/core";
import { NavParams } from "ionic-angular";

import { AccountProvider } from "../../app/providers/account.provider";

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
  
  constructor(params: NavParams,
              public accountProvider: AccountProvider) {
    this.thread = params.get("thread");
  }
  
  onReply() {
    if (this.reply) {
      let message = new Message();
      message.urn = "urn:message:" + StringUtils.generateUUID();
      message.from = this.accountProvider.currentAccount;
      message.body = this.reply;
      message.createdAt = "A moment ago";
      
      this.thread.add(message);
      this.clearReply();
    }
  }

  private clearReply() {
    this.reply = "";
  }

}