import { Account } from "./account";
import { Image } from "./image";
import { Bounty } from "./bounty";
import { Video } from "./video";

export class Post {
 
  public urn: string;
  public title: string;
  public body: string;
  public category: string;
  public bounty: Bounty;
  public image: Image;
  public video: Video;
  public organizational: boolean = false;
  public createdBy: Account;
  public createdAt: string;
  
  getExcerpt() {
    if (this.body && this.body.length > 150) {
      let limit = (this.video == null) ? 150 : 100;
      return this.body.replace("<br/>", "").substring(0, limit) + "...";
    }
    
    return null;
  }
  
}