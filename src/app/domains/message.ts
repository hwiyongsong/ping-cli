import { Account } from "./account";

export class Message {
  
  public urn: string;
  public from: Account;
  public body: string;
  public createdAt: string;
  
}