import { Image } from "./image";
import { Rating } from "./rating";

export class Account {
  
  public urn: string;
  public firstName: string;
  public lastName: string;
  public title: string;
  public description: string;
  public profileImage: Image;
  public rating: Rating;
  
  getFullName() {
    return this.firstName + " " + this.lastName; 
  }
  
}