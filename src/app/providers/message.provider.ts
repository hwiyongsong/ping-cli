import { Injectable } from "@angular/core";

import { UserProvider } from "./user.provider";

import { Incentive } from "../domains/incentive";
import { Message } from "../domains/message";
import { MessageBox } from "../domains/message-box";
import { MessageConversation } from "../domains/message-conversation";
import { User } from "../domains/user";
import { Video } from "../domains/video";

import { StringUtils } from "../utils/string-utils";

@Injectable()
export class MessageProvider {
  
  public currentInbox: MessageBox = new MessageBox();
  
  constructor(private userProvider: UserProvider) { 
    this.currentInbox = this.createMockInbox();      
  }
   
  private createMockInbox(): MessageBox {
    let inbox = new MessageBox();
    
    inbox.addConversation(this.createSeniorRoleAtUser());
    inbox.addConversation(this.createUberElevate());
    inbox.addConversation(this.createFacebookPaymentsTeam());
    inbox.addConversation(this.createSeniorEngineerPositionAtAirbnb());
    inbox.addConversation(this.createLocalDiscoveryTeamAtFacebook());
    
    return inbox;
  }
  
  private createSeniorRoleAtUser(): MessageConversation {
    let user = this.userProvider.getUserByUserUrn("urn:member:robert-conner");
    let createdAt = "Yesterday";

    let conversation = this.createConversation(user,
                                               "Senior Role at Uber Self-Driving Project",
                                               "Job Opportunity",
                                               createdAt);

    conversation.coverMessage = this.createMessage(user,
                                                   "Hi Albert,\r\n\r\nHow would you like to work on one of the newest teams working on self driving tech?\r\n\r\nSelf driving is the new technological frontier that is spreading like fire across all the biggest car manufacturers, venture capitalists and big tech companies. \r\n\r\nThe Teleassist team here at the Uber ATG is focused on solving a new problem in telepresence, support and remote operations and we could use a senior engineering leader to help build this product from ground 0. \r\n\r\nIf you're open to networking I'd love to share more. \r\n\r\nThanks!\r\nAlbert\r\n\r\n Robert Conner | Talent \r\nUber ATG | Self-Driving Cars + Trucks",
                                                   createdAt);
    
    conversation.incentive = this.createIncentive(10);
    
    return conversation;
  }
  
  private createUberElevate(): MessageConversation {
    let user = this.userProvider.getUserByUserUrn("urn:member:frank-clemmens");
    let createdAt = "Oct 13";

    let conversation = this.createConversation(user,
                                   "Learn about Uber Elevate",
                                   "Video",
                                   createdAt);

    conversation.coverMessage = this.createMessage(user,
                                             null,
                                             createdAt);
    
    conversation.coverMessage.video = this.createVideo("https://www.youtube.com/embed/nuFSh7N0Nhw",
                                                       "Uber Elevate",
                                                       "Taking commuting to the next level! Uber Elevate will use electric vertical takeoff and landing vehicles (evtols) to make our lives easier, our commutes shorter, and our cities cleaner. See how we're starting to get this idea off the ground, and join us in building the future!",
                                                       "https://img.youtube.com/vi/nuFSh7N0Nhw/0.jpg",
                                                       "4 min");
    
    conversation.incentive = this.createIncentive(5);
    
    return conversation;
  }
  
  private createFacebookPaymentsTeam(): MessageConversation {
    let user = this.userProvider.getUserByUserUrn("urn:member:lily-lapcokova");
    let createdAt = "Sep 21";
    
    let conversation = this.createConversation(user,
                                               "A Look into Facebook Payments Team",
                                               "Event",
                                               createdAt);

    conversation.coverMessage = this.createMessage(user,
                                                   "A Look Into Payments at Facebook - September 13 @ 6pm\r\n\r\nHi Albert, \r\n\r\nClear your calendar - You\'re invited to join us at Facebook HQ for a deep dive into the work of the Payments teams presented by Facebook Engineering. This talk will be followed by drinks, appetizers and great conversation with your engineering peers.\r\n\r\nWhen\/Where: Facebook HQ - September 13 @ 6pm (PST) @ 300 Constitution Drive, Menlo Park, CA (See Event Page for instructions)\r\n\r\nMore info: https:\/\/fbpaymentstechtalk.splashthat.com\r\n\r\nPlease RSVP now as space is limited.\r\n\r\nWe look forward to seeing you there!\r\n\r\nLilly Lapcakova\r\nTechnical Recruiting Lead at Facebook",
                                                   createdAt);
    
    conversation.incentive = this.createIncentive(15);
    
    return conversation;
  }
  
  private createSeniorEngineerPositionAtAirbnb(): MessageConversation {
    let user = this.userProvider.getUserByUserUrn("urn:member:kim-kamitani");
    let createdAt = "Sep 19";
    
    let conversation = this.createConversation(user,
                                               "Senior Engineer Position at Airbnb",
                                               "Job Opportunity",
                                               createdAt);

    conversation.coverMessage = this.createMessage(user,
                                                   "Kim from Airbnb, Software Engineering\r\n\r\nHi Albert, \r\n\r\nI wanted to follow up on my last two messages and see if you had any interest in discussing opportunities with Airbnb. \r\n\r\nI understand if timing might not be right, but either way, I\u2019d still like to connect so that we can keep in contact for the future. \r\n\r\nThank you in advance for your consideration,\r\nKim\r\n\r\nKim Kamitaki\r\nTechnical Recruiter at Airbnb",
                                                   createdAt);
    
    conversation.incentive = this.createIncentive(10);
    
    return conversation;
  }

  private createLocalDiscoveryTeamAtFacebook(): MessageConversation {
    let user = this.userProvider.getUserByUserUrn("urn:member:kim-kamitani");
    let createdAt = "Sep 5";

    let conversation = this.createConversation(user,
                                               "Local Discovery Team at Facebook",
                                               "Video",
                                               createdAt);

    conversation.coverMessage = this.createMessage(user,
                                                   null,
                                                   createdAt);
    
    conversation.coverMessage.video = this.createVideo("https://www.youtube.com/embed/gnzqOphpOgE",
                                                       "The Local Discovery Team at Facebook New York Engineering - Join Us",
                                                       "<p>Founded in 2004, Facebook\u2019s mission is to give people the power to build community and bring the world closer together.</p><p>People use Facebook to stay connected with friends and family, to discover what\u2019s going on in the world, and to share and express what matters to them.</p><p>Facebook is defined by our unique culture \u2013 one that rewards impact. We encourage people to be bold and solve the problems they care most about. We work in small teams and move fast to develop new products, constantly iterating.</p><p>The phrase \u201Cthis journey is 1% finished,\u201D reminds us that we\u2019ve only begun to fulfill our mission to bring the world closer together.</p>",
                                                       "https://img.youtube.com/vi/gnzqOphpOgE/0.jpg",
                                                       "4 min");
    
    conversation.incentive = this.createIncentive(5);
    
    return conversation;
  }
  
  private createConversation(user: User,
                             title: string, 
                             category: string,
                             createdAt: string): MessageConversation {
    
    let conversation = new MessageConversation();
    
    conversation.urn = "urn:message-conversation:" + StringUtils.generateUUID();
    conversation.from = user;
    conversation.title = title;
    conversation.category = category;
    conversation.createdAt = createdAt;
    
    return conversation;
  }
  
  private createMessage(user: User,
                        body: string,
                        createdAt: string) {
    let message = new Message();
    
    message.urn = "urn:message:" + StringUtils.generateUUID();
    message.from = user;
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
  
  private createIncentive(value: number): Incentive {
    let incentive = new Incentive();
    
    incentive.value = value;
    incentive.condition = "REPLY";
    
    return incentive;
  }

}