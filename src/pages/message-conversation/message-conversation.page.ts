import { Component, ViewChild } from "@angular/core";
import { Content, NavController, NavParams } from "ionic-angular";

import { CurrencyProvider } from "../../app/providers/currency.provider";
import { UserProvider } from "../../app/providers/user.provider";

import { UserProfilePage } from "../user-profile/user-profile.page";

import { Message } from "../../app/domains/message";
import { MessageConversation } from "../../app/domains/message-conversation";
import { User } from "../../app/domains/user";

import { StringUtils } from "../../app/utils/string-utils";

@Component({
  selector: "message-conversation-page",
  templateUrl: "message-conversation.page.html",
})
export class MessageConversationPage {

  public conversation: MessageConversation;
  public reply: string;
  public replyable: boolean = false;
  
  @ViewChild(Content) content: Content;
  
  constructor(params: NavParams,
              private navController: NavController,
              public currencyProvider: CurrencyProvider,
              public userProvider: UserProvider) {
    this.conversation = params.get("conversation");
    this.replyable = this.conversation.messages.length > 0;
  }
  
  onViewUserProfile(user: User) {
    this.navController.push(UserProfilePage, {
      "user": user
    });
  }
  
  onReply() {
    if (this.reply) {
      let message = new Message();
      message.urn = "urn:message:" + StringUtils.generateUUID();
      message.from = this.userProvider.currentUser;
      message.body = this.reply;
      message.createdAt = "A moment ago";
      
      this.conversation.addMessage(message);
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