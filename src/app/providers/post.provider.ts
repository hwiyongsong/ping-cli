import { Injectable } from "@angular/core";

import { UserProvider } from "./user.provider";

import { Image } from "../domains/image";
import { Incentive } from "../domains/incentive";
import { Post } from "../domains/post";
import { Video } from "../domains/video";

import { StringUtils } from "../utils/string-utils";

@Injectable()
export class PostProvider {
    
  private mockPosts: Array<Post> = [];
  
  constructor(private userProvider: UserProvider) { 
    this.initMockPosts();
  }
  
  getPostByPostUrn(postUrn: string): Post {
    for (let post of this.mockPosts) {
      if (post.urn == postUrn) {
        return post;
      }
    }
    
    console.log("** Unable to find: " + postUrn);
    return null;
  }
  
  getPostsFor(urn: string): Post[] {
    if (urn == "urn:community:blockchain") {
      return [
        this.getPostByPostUrn("urn:post:uport-project"),
        this.getPostByPostUrn("urn:post:bit-about-bancor")
      ];
    }
    
    if (urn == "urn:community:ui") {
      return [
        this.getPostByPostUrn("urn:post:airbnb-survey")
      ];
    }
    
    if (urn == "urn:community:your-network") {
      return [
        this.getPostByPostUrn("urn:post:pingme-job-referral")
      ];
    }
    
    return [];
  }
  
  private initMockPosts() {
    this.mockPosts.push(this.createPingMeJobReferral()); 
    this.mockPosts.push(this.createUPortProject());
    this.mockPosts.push(this.createBitAboutBancor());
    this.mockPosts.push(this.createAirbnbSurvey());
    this.mockPosts.push(this.createLunchWithGuyKawasaki());
  }
  
  private createPingMeJobReferral(): Post {
    let post = this.createPost("urn:post:pingme-job-referral",
                               "Referral bonus for senior software engineer at PingMe.",
                               "<p>Hi friends...I am looking for a solid full-stack senior software engineer to be part of PingMe.</p> <p>We are offering a <strong>referral bonus of $1500</strong> if you can help us find a candidate who converts to a full-time hire.</p> <h6>Job Description</h6> <p>PingMe is looking for a talented full-stack software engineer with strong backend and web development experience to be part of the PingMe platform solutions. Candidate should have a passion for building amazing user experience and a desire to question all assumptions on the status-quo to build a new peer-to-peer attention economy.</p> <h6>Desired Qualifications</h6> <ul> <li>BS/MS degree, preferably in Computer Science or related field.</li> <li>Proven work experience in software development.</li> <li>Competency in designing scalable and performant backend architecture.</li> <li>2+ years experience with Java or similar backend programming language.</li> <li>2+ years experience with web development.</li> <li>Experience with Solidity and smart contract is a plus.</li> <li>Passion for building an open, transparent, peer-to-peer economy.</li> </ul>",
                               "Referral Bonus",
                               "Refer a Candidate",
                               "urn:member:hwi-yong-song",
                               "Nov 8, 2017");
    
    post.incentive = this.createIncentive(1500,
                                    0,
                                    1,
                                    "REFERRAL");
    
    return post;
  }
  
  private createUPortProject(): Post {
    let post = this.createPost("urn:post:uport-project",
                               "uPort is LIVE. Join our alpha.",
                               "<p>Self-sovereign ID enables you to collect verifications, log-in without passwords, digitally sign transactions, and interact with Ethereum applications.</p><p>uPort ID is your mobile identity for secure digital interactions. Download the app to register your self-sovereign identity, collect verifications, log in to applications, and digitally sign Ethereum transactions.</p><p>Our app is now live. Sign up to participate in our alpha test.</p>",
                               "Sign Up",
                               "Sign Up",
                               "urn:member:michael-sena",
                               "Nov 5, 2017");
    
    post.image = this.createImage("https://cdn-images-1.medium.com/max/1200/1*6r1_9DSAr7FyZX3Uj2GLvQ.png");
    
    post.incentive = this.createIncentive(10,
                                    275,
                                    500,
                                    "REGISTER");
    
    return post;
  }
  
  private createBitAboutBancor(): Post {
    let post = this.createPost("urn:post:bit-about-bancor",
                               "Introducing Bancor Protocol",
                               "<p>Bancor introduces a revolutionary new mechanism to issue tokens, in which one currency can hold one or more other currencies in its reserve.</p></p>The implications are profound. Much like the Dollar was backed by Gold, new digital currencies can now be backed by Ether, Bitcoin, or any other currency, meaning intrinsically tradable tokens.</p></p>The White Paper and the Smart Contract are accessible at <a href='www.bancor.network'>www.bancor.network</a>.</p>",
                               "Video", 
                               "View Video",
                               "urn:member:rita-urbach",
                               "Nov 4, 2017");
     
    post.video = this.createVideo("https://www.youtube.com/embed/P8EoAvWfFnY",
                                  "A Bit About Bancor",
                                  "The Bancor team shares the vision behind Bancor and a bit about how Smart Tokens work and what they mean for the future of communities.",
                                  "https://img.youtube.com/vi/P8EoAvWfFnY/0.jpg",
                                  "3:44");
    
    post.incentive = this.createIncentive(2,
                                    323,
                                    500,
                                    "VIEW");
    
    return post;
  }
  
  private createLunchWithGuyKawasaki() {
    let post = this.createPost("urn:post:lunch-guy-kawasaki",
                               "Lunch with Guy Kawasaki",
                               "<p>I would love to meet up with some of the brightest minds in Silicon Valley and share thoughts about the latest trends in the tech industry.</p> <p>Let's have lunch at a quiet spot in Mountain View, and exchange ideas about innovation, entrepreneurship, social media, and marketing.</p> <p>Seats are limited to 6 people. Send me a message about why you want to join along with your bid, and let's see if you get selected.</p>",
                               "Event (2 seats available)",
                               "Bid for Seat",
                               "urn:member:guy-kawasaki",
                               "Nov 3, 2017");
    
    post.incentive = this.createIncentive(150,
                                          2,
                                          6,
                                          "EVENT");
    
    return post;
  }
  
  private createAirbnbSurvey(): Post {
    let post = this.createPost("urn:post:airbnb-survey",
                               "Give feedback on our new Airbnb homepage experience",
                               "<p>In preparation for the Airbnb Open and the launch of City Hosts, Airbnb is gradually rolling out a new homepage design, with a simpler design and a strong focus on experiences as a key message.</p> <p>As for most of the changes rolled out by Airbnb, the new homepage has been released as an A/B tests and thus is not yet live for 100% of the traffic.</p> <p>To ensure you can view the new version, visit www.airbnb.com in incognito mode or clean your cookies until when you see it.</p> <p>Compared to the old version, the new homepage has a more condensed look, fewer sections and a clearer focus on the “live an experience” message that the company has been pushing more and more as the center of its brand identity.</p> <p>Try out the new homepage, and give us your feedback.</p>",
                               "Survey",
                               "Take Survey",
                               "urn:member:kim-kamitani",
                               "Nov 2, 2017");
    
    post.image = this.createImage("https://cdn-images-1.medium.com/max/1600/1*Cd-s2RiqJqhmMSJQf4ne5A.png");

    post.incentive = this.createIncentive(25,
                                    72,
                                    100,
                                    "SURVEY");
    
    post.organizational = true;
                 
    return post;                        
  }
  
  private createPost(postUrn: string,
                     title: string,
                     body: string,
                     category: string,
                     actionText: string,
                     createdBy: string,
                     createdAt: string) {
    let post = new Post();
    
    post.urn = postUrn;
    post.title = title;
    post.body = body;
    post.category = category;
    post.actionText = actionText;
    post.createdBy = this.userProvider.getUserByUserUrn(createdBy);
    post.createdAt = createdAt;
    
    return post;
  }
  
  private createVideo(url: string, 
                      title: string, 
                      caption: string,
                      thumbnailUrl: string,
                      duration: string): Video {
    let video = new Video();
    
    video.url = url;
    video.title = title;
    video.caption = caption;
    video.thumbnailUrl = thumbnailUrl;
    video.duration = duration;
    
    return video;
  }
  
  private createImage(url: string): Image {
    let image = new Image();
    
    image.urn = "urn:image:" + StringUtils.generateUUID();
    image.url = url;
    
    return image;
  }
  
  private createIncentive(value: number, 
                       viewCount: number,
                       viewLimit: number,
                       condition: string): Incentive {
    let incentive = new Incentive();
    
    incentive.value = value;
    incentive.viewCount = viewCount;
    incentive.viewLimit = viewLimit;
    incentive.condition = condition
    
    return incentive;
  }
  
}