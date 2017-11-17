import { Incentive } from "./incentive";
import { Message } from "./message";
import { User } from "./user";

export class MessageConversation {
  
  public urn: string;
  public from: User;
  public title: string;
  public category: string;
  public incentive: Incentive;
  public coverMessage: Message;
  public createdAt: string;
  public messages: Array<Message> = [];

  addMessage(message: Message) {
    this.messages.push(message); 
  }
  
}