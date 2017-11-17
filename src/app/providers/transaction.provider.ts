import { Injectable } from "@angular/core";

import { TransactionHistory } from "../domains/transaction-history";

@Injectable()
export class TransactionProvider {

  mockPendingTransactionHistory: TransactionHistory = new TransactionHistory();
  mockCompletedTransactionHistory: TransactionHistory = new TransactionHistory();

  getPendingTransactionHistoryForMember(memberUrn: string): TransactionHistory {
    return this.mockPendingTransactionHistory;
  }

  getCompletedTransactionHistoryForMember(memberUrn: string): TransactionHistory {
    return this.mockCompletedTransactionHistory;
  }
  
}