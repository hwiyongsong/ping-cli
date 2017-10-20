import { Image } from "./image";

export class Account {
  
  public urn: string;
  public firstName: string;
  public lastName: string;
  public description: string;
  public profileImage: Image;
  
  getFullName() {
    return this.firstName + " " + this.lastName; 
  }
  
}