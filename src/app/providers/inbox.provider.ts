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
    let thread1 = this.createMockThread("urn:member:robert-conner",
                                        "Senior role at new Uber self-driving project",
                                        "Hi Albert,\r\n\r\nHow would you like to work on one of the newest teams working on self driving tech?\r\n\r\nSelf driving is the new technological frontier that is spreading like fire across all the biggest car manufacturers, venture capitalists and big tech companies. \r\n\r\nThe Teleassist team here at the Uber ATG is focused on solving a new problem in telepresence, support and remote operations and we could use a senior engineering leader to help build this product from ground 0. \r\n\r\nIf you're open to networking I'd love to share more. \r\n\r\nThanks!\r\nAlbert\r\n\r\n Robert Liao | Talent \r\nUber ATG | Self-Driving Cars + Trucks",
                                        "$7.50",
                                        "Yesterday");

    let thread2 = this.createMockThread("urn:member:lily-lapcokova",
                                        "A Look into Facebook Payments Team",
                                        "A Look Into Payments at Facebook - September 13 @ 6pm\r\n\r\nHi Albert, \r\n\r\nClear your calendar - You\'re invited to join us at Facebook HQ for a deep dive into the work of the Payments teams presented by Facebook Engineering. This talk will be followed by drinks, appetizers and great conversation with your engineering peers.\r\n\r\nWhen\/Where: Facebook HQ - September 13 @ 6pm (PST) @ 300 Constitution Drive, Menlo Park, CA (See Event Page for instructions)\r\n\r\nMore info: https:\/\/fbpaymentstechtalk.splashthat.com\r\n\r\nPlease RSVP now as space is limited.\r\n\r\nWe look forward to seeing you there!\r\n\r\nLilly Lapcakova\r\nTechnical Recruiting Lead at Facebook",
                                        "$15",
                                        "Sep 21");

    let thread3 = this.createMockThread("urn:member:kim-kamitani",
                                        "Sr Software Engineer position at Facebook",
                                        "Kim from Facebook, RE: Software Engineering\r\n\r\nHi Albert, \r\n\r\nI wanted to follow up on my last two messages and see if you had any interest in discussing opportunities with Facebook. \r\n\r\nI understand if timing might not be right, but either way, I\u2019d still like to connect so that we can keep in contact for the future. \r\n\r\nThank you in advance for your consideration,\r\nKim\r\n\r\nKim Kamitaki\r\nTechnical Recruiter at Facebook",
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