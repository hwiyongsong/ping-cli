import { Injectable } from "@angular/core";

import { AccountProvider } from "./account.provider";

import { Message } from "../domains/message";
import { Thread } from "../domains/thread";

import { StringUtils } from "../utils/string-utils";

@Injectable()
export class InboxProvider {
  
  private pendingMockThreads: Array<Thread> = [];
  
  constructor(private accountProvider: AccountProvider) { 
    this.initMockThreads();
  }
  
  getPendingThreads(): Array<Thread> {
    return this.pendingMockThreads;
  }
  
  getPendingSize(): number {
    return this.pendingMockThreads.length
  }
  
  private initMockThreads() {
    let thread1 = this.createMockThread("urn:member:albert-liao",
                                        "Senior role at new Uber self-driving project",
                                        "Hi Sam,\r\n\r\nHow would you like to work on one of the newest teams working on self driving tech?\r\n\r\nSelf driving is the new technological frontier that is spreading like fire across all the biggest car manufacturers, venture capitalists and big tech companies. \r\n\r\nThe Teleassist team here at the Uber ATG is focused on solving a new problem in telepresence, support and remote operations and we could use a senior engineering leader to help build this product from ground 0. \r\n\r\nIf you're open to networking I'd love to share more. \r\n\r\nThanks!\r\nAlbert\r\n\r\n Albert Liao | Talent \r\nUber ATG | Self-Driving Cars + Trucks",
                                        "$5",
                                        "Yesterday");

    let thread2 = this.createMockThread("urn:member:lily-lapcokova",
                                        "A Look into Facebook Payments Team",
                                        "",
                                        "$5",
                                        "Sep 21");

    let thread3 = this.createMockThread("urn:member:kim-kamitani",
                                        "Feedback on Kafka Whitepaper",
                                        "",
                                        "$7.50",
                                        "Sep 19");
    
    this.pendingMockThreads.push(thread1);
    this.pendingMockThreads.push(thread2);
    this.pendingMockThreads.push(thread3);
  }
  
  private createMockThread(fromAccountUrn: string,
                         subject: string, 
                         body: string, 
                         bounty: string, 
                         createdAt: string): Thread {
    let account = this.accountProvider.getAccountByAccountUrn(fromAccountUrn);
    
    let message = new Message();
    message.urn = "urn:message:" + StringUtils.generateUUID();
    message.from = account;
    message.body = body;
    message.createdAt = createdAt;
    
    let thread = new Thread();
    thread.urn = "urn:thread:" + StringUtils.generateUUID();
    thread.from = account;
    thread.subject = subject;
    thread.bounty = bounty;
    thread.createdAt = createdAt;
    thread.add(message);
    
    return thread;
  }

}