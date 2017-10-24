import { Thread } from "./thread";

export class Inbox {
  
  public threads: Array<Thread> = [];
  
  addThread(thread: Thread) {
    this.threads.push(thread); 
  }
  
}