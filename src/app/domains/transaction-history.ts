import { Transaction } from "./transaction";

export class TransactionHistory {

  public transactions: Array<Transaction> = [];
  
  push(transaction: Transaction) {
    this.transactions.push(transaction);  
  }
  
  size(): number {
    return this.transactions.length;
  }
  
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