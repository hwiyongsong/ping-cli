import { User } from "./user";

export class Transaction {

  public urn: string;
  public sender: User;
  public recipient: User;
  public description: string;
  public amount: number;
  public createdAt: string;
  
  getAddress(): string {
    return this.urn.substring(16); // Ignore "urn:transaction:" which is 16 characters long.
  }
  
}