import { Injectable } from "@angular/core";

import { AccountProvider } from "./account.provider";

import { Bounty } from "../domains/bounty";
import { Post } from "../domains/post";
import { Video } from "../domains/video";

@Injectable()
export class PostProvider {
    
  private mockPosts: Array<Post> = [];
  
  constructor(private accountProvider: AccountProvider) { 
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
  
  private initMockPosts() {
    this.mockPosts.push(this.createUPortProject());
    this.mockPosts.push(this.createBitAboutBancor());
    this.mockPosts.push(this.createAirbnbSurvey());
  }
  
  private createUPortProject(): Post {
    let post = this.createPost("urn:post:uport-project",
                               "uPort is LIVE. Join our alpha.",
                               "<p>uPort ID is your mobile identity for secure digital interactions. Download the app to register your self-sovereign identity, collect verifications, log in to applications, and digitally sign Ethereum transactions.</p><p>Our app is now live. Sign up to participate in our alpha test.</p><h4><a href='www.uport.me/signup'>Sign up for Alpha</a></h4>",
                               "Sign Up",
                               "urn:member:michael-sena",
                               "Nov 5, 2017");
    
    post.bounty = this.createBounty(10,
                                    275,
                                    500,
                                    "REGISTER");
    
    post.organizational = true;
    
    return post;
  }
  
  private createBitAboutBancor(): Post {
    let post = this.createPost("urn:post:bit-about-bancor",
                               "Introducing Bancor Protocol",
                               "<p>Introducing the Bancor Protocol. Bancor introduces a revolutionary new mechanism to issue tokens, in which one currency can hold one or more other currencies in its reserve. The implications are profound. Much like the Dollar was backed by Gold, new digital currencies can now be backed by Ether, Bitcoin, or any other currency, meaning intrinsically tradable tokens. The White Paper and the Smart Contract are accessible at www.bancor.network.</p>",
                               "Video",
                               "urn:member:rita-urbach",
                               "Nov 4, 2017");
    
    post.video = this.createVideo("https://www.youtube.com/watch?v=P8EoAvWfFnY",
                                  "A Bit About Bancor",
                                  "The Bancor team shares the vision behind Bancor and a bit about how Smart Tokens work and what they mean for the future of communities.",
                                  "https://img.youtube.com/vi/P8EoAvWfFnY/0.jpg",
                                  "3:44");
    
    post.bounty = this.createBounty(2,
                                    323,
                                    500,
                                    "VIEW");
    
    return post;
  }
  
  private createAirbnbSurvey(): Post {
    let post = this.createPost("urn:post:airbnb-survey",
                               "Give feedback on our new Airbnb homepage experience",
                               "<h5>Airbnb’s Newly Refreshed and Minimalistic Look</h5> <p>In preparation for the Airbnb Open and the launch of City Hosts, Airbnb is gradually rolling out a new homepage design, with a simpler design and a strong focus on experiences as a key message.</p> <p>As for most of the changes rolled out by Airbnb, the new homepage has been released as an A/B tests and thus is not yet live for 100% of the traffic.</p> <p>To ensure you can view the new version, visit www.airbnb.com in incognito mode or clean your cookies until when you see it.</p> <p>Compared to the old version, the new homepage has a more condensed look, fewer sections and a clearer focus on the “live an experience” message that the company has been pushing more and more as the center of its brand identity.</p> <p>Try out the new homepage, and give us your feedback.</p> <h4><a href='#'>Give Feedback</a></h4>",
                               "Survey",
                               "urn:member:kim-kamitani",
                               "Nov 2, 2017");

     post.bounty = this.createBounty(25,
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
                     createdBy: string,
                     createdAt: string) {
    let post = new Post();
    
    post.urn = postUrn;
    post.title = title;
    post.body = body;
    post.category = category;
    post.createdBy = this.accountProvider.getAccountByAccountUrn(createdBy);;
    post.createdAt = createdAt;
    
    return post;
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
  
  private createBounty(value: number, 
                       viewCount: number,
                       viewLimit: number,
                       condition: string) {
    let bounty = new Bounty();
    
    bounty.value = value;
    bounty.viewCount = viewCount;
    bounty.viewLimit = viewLimit;
    bounty.condition = condition
    
    return bounty;
  }
  
}