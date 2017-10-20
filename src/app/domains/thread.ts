import { Account } from "./account";
import { Message } from "./message";

export class Thread {
  
  public urn: string;
  public from: Account;
  public subject: string;
  public bounty: string;
  public createdAt: string;
  public messages: Array<Message> = [];
  
  add(message: Message) {
    this.messages.push(message); 
  }
  
  size() {
    return this.messages.length; 
  }
  
}