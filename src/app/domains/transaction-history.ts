import { TransactionRecord } from "./transaction-record";

export class TransactionHistory {

  public records: Array<TransactionRecord> = [];
  
  getTotal(): number {
    let total = 0;
    
    for (let record of this.records) {
      if (record.amount) {
        total += record.amount; 
      }
    }
    
    return total;
  }
  
}