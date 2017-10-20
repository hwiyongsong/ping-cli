import { Injectable } from "@angular/core";

import { Account } from "../domains/account";
import { Image } from "../domains/image";

import { StringUtils } from "../utils/string-utils";

@Injectable()
export class AccountProvider {
    
  private mockAccounts: Array<Account> = [];
  
  constructor() { 
    this.initMockAccounts();
  }
  
  getAccountByAccountUrn(accountUrn: string): Account {
    for (let account of this.mockAccounts) {
      if (account.urn == accountUrn) {
        return account;
      }
    }
    
    return null;
  }
  
  getAccounts(): Array<Account> {
    return this.mockAccounts; 
  }
  
  private initMockAccounts() {
    this.initMockAccount("urn:member:albert-liao",
                         "Albert",
                         "Liao",
                         "Building the best teams to build the best self-driving vehicles",
                         "https://media.licdn.com/mpr/mpr/shrinknp_100_100/AAEAAQAAAAAAAA3kAAAAJGRlZmQxMzhkLWFlNjQtNDBiYy05ZjE2LTg0ODQ0NjVmMzUzOA.jpg");

    this.initMockAccount("urn:member:lily-lapcokova",
                         "Lily",
                         "Lapcokova",
                         "My passion lies in finding exceptional talent, building candidate and client relationships and thinking outside the box to solve challenges.",
                         "https://media.licdn.com/mpr/mpr/shrinknp_100_100/AAEAAQAAAAAAAATfAAAAJGRiMWQxOTcyLTUxZTYtNGVlZC1iYzEyLTNhYmU5YzhlNGVlNw.jpg");

    this.initMockAccount("urn:member:kim-kamitani",
                         "Kim",
                         "Kamitani",
                         "A fun loving talent builder in the Silicon Valley",
                         "https://media.licdn.com/mpr/mpr/shrinknp_100_100/AAEAAQAAAAAAAAMiAAAAJDhjMDRkZTRlLTk1Y2YtNDhlYS05NmE4LTA2NTRlODk4MDU1NQ.jpg");
  }
  
  private initMockAccount(accountUrn: string,
                            firstName: string, 
                            lastName: string,
                            description: string,
                            profileImageUrl: string) {
    let account = new Account();
    
    account.urn = accountUrn;
    account.firstName = firstName;
    account.lastName = lastName;
    account.description = description;
    account.profileImage = new Image();
    account.profileImage.urn = "urn:image:" + StringUtils.generateUUID();
    account.profileImage.url = profileImageUrl;
    
    this.mockAccounts.push(account);
  }
    
}