import { Account } from "./account";
import { Message } from "./message";

export class Thread {
  
  public urn: string;
  public from: Account;
  public subject: string;
  public category: string;
  public bounty: string;
  public createdAt: string;
  public coverMessage: Message;
  public messages: Array<Message> = [];

  addMessage(message: Message) {
    this.messages.push(message); 
  }
  
}