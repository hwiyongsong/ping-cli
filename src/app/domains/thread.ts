import { Account } from "./account";
import { Incentive } from "./incentive";
import { Message } from "./message";

export class Thread {
  
  public urn: string;
  public from: Account;
  public subject: string;
  public category: string;
  public incentive: Incentive;
  public createdAt: string;
  public coverMessage: Message;
  public messages: Array<Message> = [];

  addMessage(message: Message) {
    this.messages.push(message); 
  }
  
}