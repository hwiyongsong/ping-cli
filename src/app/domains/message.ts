import { Image } from "./image";
import { User } from "./user";
import { Video } from "./video";

export class Message {
  
  public urn: string;
  public from: User;
  public body: string;
  public image: Image;
  public video: Video;
  public createdAt: string;
  
}