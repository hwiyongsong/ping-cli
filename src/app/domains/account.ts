import { Education } from "./education";
import { Experience } from "./experience";
import { Image } from "./image";
import { Interest } from "./interest";
import { Rating } from "./rating";
import { Relationship } from "./relationship";

export class Account {
  
  public urn: string;
  public firstName: string;
  public lastName: string;
  public headline: string;
  public description: string;
  public profileImage: Image;
  public rating: Rating;
  public relationship: Relationship;
  public experiences: Array<Experience> = [];
  public educations: Array<Education> = [];
  public interests: Array<Interest> = [];
  
  getFullName() {
    return this.firstName + " " + this.lastName; 
  }
  
}