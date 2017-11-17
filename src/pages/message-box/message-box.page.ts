import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

import { CurrencyProvider } from "../../app/providers/currency.provider";
import { MessageProvider } from "../../app/providers/message.provider";

import { UserProfilePage } from "../user-profile/user-profile.page";
import { MessageConversationPage } from "../message-conversation/message-conversation.page";

import { MessageConversation } from "../../app/domains/message-conversation";
import { User } from "../../app/domains/user";

@Component({
  selector: "message-box-page",
  templateUrl: "message-box.page.html",
})
export class MessageBoxPage {

  constructor(private navController: NavController, 
              public currencyProvider: CurrencyProvider,
              public messageProvider: MessageProvider) {
  }
  
  onViewUserProfile(user: User) {
    this.navController.push(UserProfilePage, {
      "user": user
    });
  }

  onViewConversation(conversation: MessageConversation) {
    this.navController.push(MessageConversationPage, {
      "conversation": conversation
    }); 
  }

}