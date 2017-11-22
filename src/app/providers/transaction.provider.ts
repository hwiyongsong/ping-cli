import { Injectable } from "@angular/core";

import { UserProvider } from "./user.provider";

import { Transaction } from "../domains/transaction";
import { TransactionHistory } from "../domains/transaction-history";

@Injectable()
export class TransactionProvider {
    
  private mockTransactionHistory: TransactionHistory = new TransactionHistory();
  
  constructor(private userProvider: UserProvider) { 
    this.initMockTransactionHistory();
  }

  getTransactionHistory(): TransactionHistory {
    return this.mockTransactionHistory;
  }

  private initMockTransactionHistory() {
    this.mockTransactionHistory.push(this.createMockTransaction("urn:transaction:0xa6b97ca581f33be7006c6e6712306de6c234123e",
                                                                "urn:member:michael-sena",
                                                                "urn:member:scott-hartman",
                                                                "Signed up for uPort.",
                                                                15,
                                                                "Nov 10"));
    
    this.mockTransactionHistory.push(this.createMockTransaction("urn:transaction:0x19e52036b2d8ea2516de8e630bc7ae92d67c0faa",
                                                                "urn:member:scott-hartman",
                                                                "urn:member:anya-hayden",
                                                                "You sent a message and got a reply.",
                                                                100,
                                                                "Nov 2"));

    this.mockTransactionHistory.push(this.createMockTransaction("urn:transaction:0xc3bd793c170c5298c86944854b2b715fc953a5cb",
                                                                "urn:member:robert-conner",
                                                                "urn:member:scott-hartman",
                                                                "Responded to Job Opportunity at Uber.",
                                                                10,
                                                                "Oct 19"));
    
    this.mockTransactionHistory.push(this.createMockTransaction("urn:transaction:0x6229770fede13856d2afbf4153d187e1dc07fc37",
                                                                "urn:member:lily-lapcokova",
                                                                "urn:member:scott-hartman",
                                                                "Responded to Job Opportunity at Facebook.",
                                                                10,
                                                                "Oct 13"));
    
    this.mockTransactionHistory.push(this.createMockTransaction("urn:transaction:0xd7154185335f7776f23fad2ec19b3407ab7cdcb1",
                                                                "urn:member:scott-hartman",
                                                                "urn:member:reid-hoffman",
                                                                "You sent a bid for an event and was accepted.",
                                                                150,
                                                                "Oct 13"));

    this.mockTransactionHistory.push(this.createMockTransaction("urn:transaction:0x7d05344acef552d03e66bb1fb8664b620b8a81f7",
                                                                "urn:member:frank-clemmens",
                                                                "urn:member:scott-hartman",
                                                                "Referral bonus for software engineer at Uber.",
                                                                900,
                                                                "Oct 4"));

    this.mockTransactionHistory.push(this.createMockTransaction("urn:transaction:0xe7ee12c27a84fe5b46505d9dfdda1ee72394782f",
                                                                "urn:member:kim-kamitani",
                                                                "urn:member:scott-hartman",
                                                                "Responded to Job Opportunity at Airbnb.",
                                                                10,
                                                                "Oct 3"));
    
  }
  
  private createMockTransaction(urn: string,
                                senderUrn: string,
                                recipientUrn: string,
                                description: string,
                                amount: number,
                                createdAt: string): Transaction {
    let transaction = new Transaction();
    
    transaction.urn = urn;
    transaction.sender = this.userProvider.getUserByUserUrn(senderUrn);
    transaction.recipient = this.userProvider.getUserByUserUrn(recipientUrn);
    transaction.description = description;
    transaction.amount = amount;
    transaction.createdAt = createdAt;
    
    return transaction;
  }
  
}