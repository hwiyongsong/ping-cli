import { User } from "./user";

export class TransactionRecord {

  public urn: string;
  public sender: User;
  public recipient: User;
  public description: string;
  public amount: number;
  public status: string;
  public createdAt: string;
  public settledAt: string;
  
}