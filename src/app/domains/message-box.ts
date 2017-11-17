import { MessageConversation } from "./message-conversation";

export class MessageBox {
  
  public conversations: Array<MessageConversation> = [];
  
  addConversation(conversation: MessageConversation) {
    this.conversations.push(conversation); 
  }
  
}