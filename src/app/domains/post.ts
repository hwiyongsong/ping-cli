import { Account } from "./account";
import { Image } from "./image";
import { Bounty } from "./bounty";
import { Video } from "./video";

export class Post {
 
  public urn: string;
  public from: Account;
  public title: string;
  public body: string;
  public createdAt: string;
  public bounty: Bounty;
  public image: Image;
  public video: Video;
  
}