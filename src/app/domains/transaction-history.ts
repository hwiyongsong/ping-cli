import { Transaction } from "./transaction";

export class TransactionHistory {

  public transactions: Array<Transaction> = [];
  
  getTotal(): number {
    let total = 0;
    
    for (let transaction of this.transactions) {
      if (transaction.amount) {
        total += transaction.amount; 
      }
    }
    
    return total;
  }
  
}