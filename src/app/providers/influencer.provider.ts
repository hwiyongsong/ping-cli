import { Injectable } from "@angular/core";

import { UserProvider } from "./user.provider";

import { User } from "../domains/user";

@Injectable()
export class InfluencerProvider {
    
  private mockInfluencers: Array<User> = [];
  
  constructor(private userProvider: UserProvider) { 
    this.initInfluencers();
  }
  
  private initInfluencers() {
    this.mockInfluencers.push(this.userProvider.getUserByUserUrn("urn:member:joseph-lubin"));
    this.mockInfluencers.push(this.userProvider.getUserByUserUrn("urn:member:reid-hoffman"));
    this.mockInfluencers.push(this.userProvider.getUserByUserUrn("urn:member:ryan-bethencourt"));
    this.mockInfluencers.push(this.userProvider.getUserByUserUrn("urn:member:constance-choi"));
    this.mockInfluencers.push(this.userProvider.getUserByUserUrn("urn:member:andre-de-castro"));
  }
  
}