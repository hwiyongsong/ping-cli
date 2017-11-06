import { Injectable } from "@angular/core";

import { AccountProvider } from "./account.provider";

import { Account } from "../domains/account";
import { Inbox } from "../domains/inbox";
import { Message } from "../domains/message";
import { Thread } from "../domains/thread";
import { Video } from "../domains/video";

import { StringUtils } from "../utils/string-utils";

@Injectable()
export class InboxProvider {
  
  public currentInbox: Inbox = new Inbox();
  
  constructor(private accountProvider: AccountProvider) { 
    this.currentInbox = this.createMockInbox();      
  }
   
  private createMockInbox(): Inbox {
    let inbox = new Inbox();
    
    inbox.addThread(this.createMockConversation01());
    inbox.addThread(this.createMockVideo01());
    inbox.addThread(this.createMockConversation02());
    inbox.addThread(this.createMockConversation03());
    inbox.addThread(this.createMockVideo02());
    
    return inbox;
  }
  
  private createMockConversation01(): Thread {
    let account = this.accountProvider.getAccountByAccountUrn("urn:member:robert-conner");
    let createdAt = "Yesterday";

    let thread = this.createThread(account,
                                   "Senior Role at Uber Self-Driving Project",
                                   "Job Opportunity",
                                   "$10",
                                   createdAt);

    let message = this.createMessage(account,
                                     "Hi Albert,\r\n\r\nHow would you like to work on one of the newest teams working on self driving tech?\r\n\r\nSelf driving is the new technological frontier that is spreading like fire across all the biggest car manufacturers, venture capitalists and big tech companies. \r\n\r\nThe Teleassist team here at the Uber ATG is focused on solving a new problem in telepresence, support and remote operations and we could use a senior engineering leader to help build this product from ground 0. \r\n\r\nIf you're open to networking I'd love to share more. \r\n\r\nThanks!\r\nAlbert\r\n\r\n Robert Conner | Talent \r\nUber ATG | Self-Driving Cars + Trucks",
                                     createdAt);
    
    thread.coverMessage = message;
    
    return thread;
  }
  
  private createMockConversation02() {
    let account = this.accountProvider.getAccountByAccountUrn("urn:member:lily-lapcokova");
    let createdAt = "Sep 21";
    
    let thread = this.createThread(account,
                                   "A Look into Facebook Payments Team",
                                   "Event",
                                   "$15",
                                   createdAt);

    let message = this.createMessage(account,
                                     "A Look Into Payments at Facebook - September 13 @ 6pm\r\n\r\nHi Albert, \r\n\r\nClear your calendar - You\'re invited to join us at Facebook HQ for a deep dive into the work of the Payments teams presented by Facebook Engineering. This talk will be followed by drinks, appetizers and great conversation with your engineering peers.\r\n\r\nWhen\/Where: Facebook HQ - September 13 @ 6pm (PST) @ 300 Constitution Drive, Menlo Park, CA (See Event Page for instructions)\r\n\r\nMore info: https:\/\/fbpaymentstechtalk.splashthat.com\r\n\r\nPlease RSVP now as space is limited.\r\n\r\nWe look forward to seeing you there!\r\n\r\nLilly Lapcakova\r\nTechnical Recruiting Lead at Facebook",
                                     createdAt);
    
    
    thread.coverMessage = message;
    
    return thread;
  }
  
  private createMockConversation03() {
    let account = this.accountProvider.getAccountByAccountUrn("urn:member:kim-kamitani");
    let createdAt = "Sep 19";
    
    let thread = this.createThread(account,
                                   "Senior Engineer Position at Facebook",
                                   "Job Opportunity",
                                   "$10",
                                   createdAt);

    let message = this.createMessage(account,
                                     "Kim from Facebook, Software Engineering\r\n\r\nHi Albert, \r\n\r\nI wanted to follow up on my last two messages and see if you had any interest in discussing opportunities with Facebook. \r\n\r\nI understand if timing might not be right, but either way, I\u2019d still like to connect so that we can keep in contact for the future. \r\n\r\nThank you in advance for your consideration,\r\nKim\r\n\r\nKim Kamitaki\r\nTechnical Recruiter at Facebook",
                                     createdAt);

    thread.coverMessage = message;
    
    return thread;
  }
  
  private createMockVideo01() {
    let account = this.accountProvider.getAccountByAccountUrn("urn:member:frank-clemmens");
    let createdAt = "Oct 13";

    let thread = this.createThread(account,
                                   "Learn about Uber Elevate",
                                   "Video",
                                   "$5",
                                   createdAt);

    let video = this.createVideo("https://www.youtube.com/embed/nuFSh7N0Nhw",
                                 "Uber Elevate",
                                 "Taking commuting to the next level! Uber Elevate will use electric vertical takeoff and landing vehicles (evtols) to make our lives easier, our commutes shorter, and our cities cleaner. See how we're starting to get this idea off the ground, and join us in building the future!",
                                 "https://img.youtube.com/vi/nuFSh7N0Nhw/0.jpg",
                                 "4 min");

    let message = this.createMessage(account,
                                     null,
                                     createdAt);

    message.video = video;
    thread.coverMessage = message;
    
    return thread;
  }
  
  private createMockVideo02() {
    let account = this.accountProvider.getAccountByAccountUrn("urn:member:kim-kamitani");
    let createdAt = "Sep 5";

    let thread = this.createThread(account,
                                   "Local Discovery Team at Facebook",
                                   "Video",
                                   "$5",
                                   createdAt);

    let video = this.createVideo("https://www.youtube.com/embed/gnzqOphpOgE",
                                 "The Local Discovery Team at Facebook New York Engineering - Join Us",
                                 "Founded in 2004, Facebook\u2019s mission is to give people the power to build community and bring the world closer together. People use Facebook to stay connected with friends and family, to discover what\u2019s going on in the world, and to share and express what matters to them.\r\n\r\nFacebook is defined by our unique culture \u2013 one that rewards impact. We encourage people to be bold and solve the problems they care most about. We work in small teams and move fast to develop new products, constantly iterating. The phrase \u201Cthis journey is 1% finished,\u201D reminds us that we\u2019ve only begun to fulfill our mission to bring the world closer together. ",
                                 "https://img.youtube.com/vi/gnzqOphpOgE/0.jpg",
                                 "4 min");

    let message = this.createMessage(account,
                                     null,
                                     createdAt);

    message.video = video;
    thread.coverMessage = message;
    
    return thread;
  }
  
  private createThread(account: Account,
                       subject: string, 
                       category: string,
                       bounty: string,
                       createdAt: string): Thread {
    
    let thread = new Thread();
    
    thread.urn = "urn:thread:" + StringUtils.generateUUID();
    thread.from = account;
    thread.subject = subject;
    thread.category = category;
    thread.bounty = bounty;
    thread.createdAt = createdAt;
    
    return thread;
  }
  
  private createMessage(account: Account,
                        body: string,
                        createdAt: string) {
    let message = new Message();
    
    message.urn = "urn:message:" + StringUtils.generateUUID();
    message.from = account;
    message.body = body;
    message.createdAt = createdAt;
    
    return message;
  }
  
  private createVideo(url: string, 
                      title: string, 
                      caption: string,
                      thumbnailUrl: string,
                      duration: string) {
    let video = new Video();
    
    video.url = url;
    video.title = title;
    video.caption = caption;
    video.thumbnailUrl = thumbnailUrl;
    video.duration = duration;
    
    return video;
  }

}