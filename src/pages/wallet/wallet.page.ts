import { Component } from "@angular/core";

import { TransactionProvider } from "../../app/providers/transaction.provider";
import { UserProvider } from "../../app/providers/user.provider";

@Component({
  selector: "wallet-page",
  templateUrl: "wallet.page.html",
})
export class WalletPage {

  constructor(private transactionProvider: TransactionProvider,
              public userProvider: UserProvider) {
    // Do nothing.
  }
  
}