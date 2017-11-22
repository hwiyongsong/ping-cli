import { Component } from "@angular/core";

import { CurrencyProvider } from "../../app/providers/currency.provider";
import { TransactionProvider } from "../../app/providers/transaction.provider";
import { UserProvider } from "../../app/providers/user.provider";

@Component({
  selector: "wallet-page",
  templateUrl: "wallet.page.html",
})
export class WalletPage {

  constructor(public currencyProvider: CurrencyProvider,
              public transactionProvider: TransactionProvider,
              public userProvider: UserProvider) {
    // Do nothing.
  }
  
}