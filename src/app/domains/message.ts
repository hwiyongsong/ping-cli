import { Account } from "./account";
import { Image } from "./image";
import { Video } from "./video";

export class Message {
  
  public urn: string;
  public from: Account;
  public body: string;
  public image: Image;
  public video: Video;
  public createdAt: string;
  
}