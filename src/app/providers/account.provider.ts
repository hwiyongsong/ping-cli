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
                                            "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAMVAAAAJDhhNDJlOGY1LTg4NmQtNGFmOC1hMGI2LTRjY2ViMjNhNDZmNQ.jpg",
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
                                             "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/5/000/1c6/2ca/0ed27c5.jpg",
                                             4.5,
                                             155);
    
    let uber = this.createMockAccount("urn:organization:uber",
                                       "Uber",
                                       "",
                                       "Get there.",
                                       "We believe that by solving some of the biggest problems of our time, we can create a future where there is limitless freedom of movement for people and things all across the world. Just talk to our people \u2014 and feel their passion, optimism and curiosity for building solutions every single day on behalf of drivers, riders, couriers, eaters and employees.\r\n\r\nWhile the tough problems we face everyday can be incredibly difficult to figure out, we believe those same problems enable us to personally grow the most. So we welcome people from all backgrounds who have the passion to change the world and also want to help create a supportive and collaborative environment. So that ultimately, we can learn together, solve together, build together, and move the world forward together.",
                                       "https://media.licdn.com/mpr/mpr/shrink_400_400/AAEAAQAAAAAAAAqwAAAAJDAzZGFhNTg1LWU3ZmYtNGFlZS05YWI1LWQ2MmMyZTIxOTliNw.png",
                                       4.4,
                                       765);
    
    let facebook = this.createMockAccount("urn:organization:facebook",
                                       "Facebook",
                                       "",
                                       "Be Connected. Be Discovered.",
                                       "Founded in 2004, Facebook\u2019s mission is to give people the power to build community and bring the world closer together. People use Facebook to stay connected with friends and family, to discover what\u2019s going on in the world, and to share and express what matters to them.\r\n\r\nFacebook is defined by our unique culture \u2013 one that rewards impact. We encourage people to be bold and solve the problems they care most about. We work in small teams and move fast to develop new products, constantly iterating. The phrase \u201Cthis journey is 1% finished,\u201D reminds us that we\u2019ve only begun to fulfill our mission to bring the world closer together. \r\n\r\nFor a full listings of our jobs, visit www.facebook.com/careers\r\n\r\n*Thank you for visiting our page. We welcome conversation and reserve the right to remove any comments that constitute harassment, hate speech, abuse, libel, or spam.",
                                       "https://media.licdn.com/mpr/mpr/shrink_400_400/AAEAAQAAAAAAAAYRAAAAJDVlMzBlYjNiLTAxN2QtNGQxZC1iZTAzLTlmNWQ1OTE4OGY4ZA.png",
                                       4.7,
                                       943); 
    
    this.mockAccounts.push(albertEinstein);
    this.mockAccounts.push(albertLiao);
    this.mockAccounts.push(lilyLapcokova);
    this.mockAccounts.push(kimKamitani);
    this.mockAccounts.push(uber);
    this.mockAccounts.push(facebook);
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