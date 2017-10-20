import { Injectable } from "@angular/core";

import { Account } from "../domains/account";
import { Image } from "../domains/image";

import { StringUtils } from "../utils/string-utils";

@Injectable()
export class AccountProvider {
    
  public currentAccount: Account;
  private mockAccounts: Array<Account> = [];
  
  constructor() { 
    this.initMockAccounts();
    this.initCurrentAccount();
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
  
  private initCurrentAccount() {
    this.currentAccount = this.getAccountByAccountUrn("urn:member:albert-einstein");
  }
  
  private initMockAccounts() {
    let albertEinstein = this.createMockAccount("urn:member:albert-einstein",
                                                "Albert",
                                                "Einstein",
                                                "Imagination is more important than knowledge.",
                                                "https://pbs.twimg.com/profile_images/879355674957926400/VSGZHGib.jpg");
    
    let albertLiao = this.createMockAccount("urn:member:robert-liao",
                                            "Robert",
                                            "Liao",
                                            "Building the best teams to build the best self-driving vehicles",
                                            "https://media.licdn.com/mpr/mpr/shrinknp_100_100/AAEAAQAAAAAAAA3kAAAAJGRlZmQxMzhkLWFlNjQtNDBiYy05ZjE2LTg0ODQ0NjVmMzUzOA.jpg");

    let lilyLapcokova = this.createMockAccount("urn:member:lily-lapcokova",
                                               "Lily",
                                               "Lapcokova",
                                               "My passion lies in finding exceptional talent, building candidate and client relationships and thinking outside the box to solve challenges.",
                                               "https://media.licdn.com/mpr/mpr/shrinknp_100_100/AAEAAQAAAAAAAATfAAAAJGRiMWQxOTcyLTUxZTYtNGVlZC1iYzEyLTNhYmU5YzhlNGVlNw.jpg");

    let kimKamitani = this.createMockAccount("urn:member:kim-kamitani",
                                             "Kim",
                                             "Kamitani",
                                             "A fun loving talent builder in the Silicon Valley",
                                             "https://media.licdn.com/mpr/mpr/shrinknp_100_100/AAEAAQAAAAAAAAMiAAAAJDhjMDRkZTRlLTk1Y2YtNDhlYS05NmE4LTA2NTRlODk4MDU1NQ.jpg");
    
    this.mockAccounts.push(albertEinstein);
    this.mockAccounts.push(albertLiao);
    this.mockAccounts.push(lilyLapcokova);
    this.mockAccounts.push(kimKamitani);
  }
  
  private createMockAccount(accountUrn: string,
                            firstName: string, 
                            lastName: string,
                            description: string,
                            profileImageUrl: string): Account {
    let account = new Account();
    
    account.urn = accountUrn;
    account.firstName = firstName;
    account.lastName = lastName;
    account.description = description;
    account.profileImage = new Image();
    account.profileImage.urn = "urn:image:" + StringUtils.generateUUID();
    account.profileImage.url = profileImageUrl;
    
    return account;
  }
    
}