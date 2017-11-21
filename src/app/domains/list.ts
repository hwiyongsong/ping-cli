import { Image } from "./image";
import { Incentive } from "./incentive";
import { User } from "./user";

export class List {
 
  public urn: string;
  public name: string;
  public description: string;
  public size: string;
  public incentive: Incentive;
  public profileImage: Image;
  public users: Array<User> = [];
  
  push(user: User) {
    this.users.push(user);  
  }
  
}