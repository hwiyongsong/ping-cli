import { Education } from "./education";
import { Experience } from "./experience";
import { Image } from "./image";
import { Interest } from "./interest";
import { Rating } from "./rating";
import { Relationship } from "./relationship";

import { NumberUtils } from "../utils/number-utils";

export class Account {
  
  public urn: string;
  public firstName: string;
  public lastName: string;
  public headline: string;
  public description: string;
  public profileImage: Image;
  public rating: Rating;
  public connectionSize: number;
  public karmaSize: number;
  public balance: number = 325;
  public relationship: Relationship;
  public experiences: Array<Experience> = [];
  public educations: Array<Education> = [];
  public interests: Array<Interest> = [];
  
  getFullName() {
    return this.firstName + " " + this.lastName; 
  }
  
  getCurrentCompany() {
    if (this.experiences.length > 0) {
      return this.experiences[0].company;
    }
    
    return null;
  }
  
  formatKarmaSize() {
    return NumberUtils.format(this.karmaSize); 
  }
  
  formatBalance() {
    return "$" + NumberUtils.format(this.balance); 
  }
  
}