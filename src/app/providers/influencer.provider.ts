import { Injectable } from "@angular/core";

import { AccountProvider } from "./account.provider";

import { Account } from "../domains/account";

@Injectable()
export class InfluencerProvider {
    
  private mockInfluencers: Array<Account> = [];
  
  constructor(private accountProvider: AccountProvider) { 
    this.initInfluencers();
  }
  
  private initInfluencers() {
    this.mockInfluencers.push(this.accountProvider.getAccountByAccountUrn("urn:member:joseph-lubin"));
    this.mockInfluencers.push(this.accountProvider.getAccountByAccountUrn("urn:member:reid-hoffman"));
    this.mockInfluencers.push(this.accountProvider.getAccountByAccountUrn("urn:member:ryan-bethencourt"));
    this.mockInfluencers.push(this.accountProvider.getAccountByAccountUrn("urn:member:constance-choi"));
    this.mockInfluencers.push(this.accountProvider.getAccountByAccountUrn("urn:member:andre-de-castro"));
  }
  
}