import { Account } from "./account";
import { Image } from "./image";
import { Bounty } from "./bounty";
import { Video } from "./video";

export class Post {
 
  public urn: string;
  public title: string;
  public body: string;
  public createdBy: Account;
  public createdAt: string;
  public bounty: Bounty;
  public image: Image;
  public video: Video;
  public organizational: boolean = false;
  
  getExcerpt() {
    if (this.body && this.body.length > 120) {
      return this.body.substring(0, 120) + "...";
    }
    
    return null;
  }
  
}