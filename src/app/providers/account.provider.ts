import { Injectable } from "@angular/core";

import { Account } from "../domains/account";
import { Image } from "../domains/image";
import { Rating } from "../domains/rating";

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
                                                "Principal engineer and theorist at Einsten Labs",
                                                "Imagination is more important than knowledge.",
                                                "https://pbs.twimg.com/profile_images/879355674957926400/VSGZHGib.jpg",
                                                4.4,
                                                64);
    
    let albertLiao = this.createMockAccount("urn:member:robert-conner",
                                            "Robert",
                                            "Conner",
                                            "HR Manager at Uber",
                                            "Building the best teams to build the ultimate self-driving vehicles. Also crazy about robotics and ping pong.",
                                            "https://media.licdn.com/mpr/mpr/shrinknp_500_500/AAEAAQAAAAAAAAMVAAAAJDhhNDJlOGY1LTg4NmQtNGFmOC1hMGI2LTRjY2ViMjNhNDZmNQ.jpg",
                                            4.7,
                                            83);

    let lilyLapcokova = this.createMockAccount("urn:member:lily-lapcokova",
                                               "Lily",
                                               "Lapcokova",
                                               "Senior Event Coordinator at Facebook",
                                               "My passion lies in finding exceptional talent, building candidate and client relationships and thinking outside the box to solve challenges.",
                                               "https://media.licdn.com/media/AAEAAQAAAAAAAAboAAAAJGEwMTFhYWU2LTRmODgtNDFlYi1iOGM0LTJhYjRjZjE3YjdlMQ.jpg",
                                               4.9,
                                               98);

    let kimKamitani = this.createMockAccount("urn:member:kim-kamitani",
                                             "Kim",
                                             "Kamitani",
                                             "Talent Recruiter at Facebook",
                                             "A fun loving talent builder and food warrior in the Silicon Valley.",
                                             "https://media.licdn.com/mpr/mpr/shrinknp_500_500/p/5/000/1c6/2ca/0ed27c5.jpg",
                                             4.5,
                                             155); 
    
    this.mockAccounts.push(albertEinstein);
    this.mockAccounts.push(albertLiao);
    this.mockAccounts.push(lilyLapcokova);
    this.mockAccounts.push(kimKamitani);
  }
  
  private createMockAccount(accountUrn: string,
                            firstName: string, 
                            lastName: string,
                            title: string,
                            description: string,
                            profileImageUrl: string,
                            ratingScore: number,
                            ratingCount: number): Account {
    let account = new Account();
    
    account.urn = accountUrn;
    account.firstName = firstName;
    account.lastName = lastName;
    account.title = title;
    account.description = description;
    account.profileImage = new Image();
    account.profileImage.urn = "urn:image:" + StringUtils.generateUUID();
    account.profileImage.url = profileImageUrl;
    account.rating = new Rating();
    account.rating.score = ratingScore;
    account.rating.count = ratingCount;
    
    return account;
  }
    
}