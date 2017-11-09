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
  
  getPostsByCommunity(communityUrn: string): Array<Post> {
    if (communityUrn == "urn:community:ai") {
      return this.getPostsForArtificialIntelligence();
    }
    
    if (communityUrn == "urn:community:ethereum") {
      return this.getPostsForEthereum(); 
    }
    
    return [];
  }
  
  private initMockPosts() {
    this.mockPosts.push(this.createUPortProject());
    this.mockPosts.push(this.createBitAboutBancor());
    this.mockPosts.push(this.createFacebookArtificialIntelligenceResearch());
  }
  
  private getPostsForEthereum(): Array<Post> {
    return [
      this.createUPortProject(),
      this.createBitAboutBancor()
    ];
  }
  
  private getPostsForArtificialIntelligence(): Array<Post>{
    return [
      this.createFacebookArtificialIntelligenceResearch()
    ];
  }
  
  private createUPortProject(): Post {
    let post = this.createPost("urn:post:uport-project",
                               "uPort is LIVE. Sign up for our alpha.",
                               "<p>uPort ID is your mobile identity for secure digital interactions. Download the app to register your self-sovereign identity, collect verifications, log in to applications, and digitally sign Ethereum transactions.</p><p>Our app is now live. Sign up to participate in our alpha test.</p><h4><a href='www.uport.me/signup'>Sign up for Alpha</a></h4>",
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
                               "urn:member:rita-urbach",
                               "Nov 4, 2017");
    
    post.video = this.createVideo("https://www.youtube.com/watch?v=P8EoAvWfFnY",
                                  "A Bit About Bancor",
                                  "The Bancor team shares the vision behind Bancor and a bit about how Smart Tokens work and what they mean for the future of communities.",
                                  "https://i.ytimg.com/vi_webp/P8EoAvWfFnY/hqdefault.webp",
                                  "3:44");
    
    post.bounty = this.createBounty(2,
                                    323,
                                    500,
                                    "VIEW");
    
    return post;
  }
  
  private createFacebookArtificialIntelligenceResearch(): Post {
    let post = this.createPost("urn:post:facebook-ai-research",
                               "Boxes | Let's Unlock Cities",
                               "<h3>Advancing the field of machine intelligence</h3> <h5>We are committed to advancing the field of machine intelligence and are creating new technologies to give people better ways to communicate. In short, to solve AI.</h5> <p>Facebook Artificial Intelligence Researchers (FAIR) seek to understand and develop systems with human level intelligence by advancing the longer-term academic problems surrounding AI. Our research covers the full spectrum of topics related to AI, and to deriving knowledge from data: theory, algorithms, applications, software infrastructure and hardware infrastructure. Long-term objectives of understanding intelligence and building intelligent machines are bold and ambitious, and we know that making significant progress towards AI can’t be done in isolation. That’s why we actively engage with the research community through publications, open source software, participation in technical conferences and workshops, and collaborations with colleagues in academia.</p> <p>Facebook AI Researchers are based in Menlo Park, New York City and Paris, France.</p> <p>Check us out at <a href='https://research.fb.com/category/facebook-ai-research-fair/'>https://research.fb.com/category/facebook-ai-research-fair/</a>.",
                               "urn:member:lily-lapcokova",
                               "Nov 2, 2017");
    
    post.video = this.createVideo("https://www.youtube.com/watch?v=-CRJLam3BNc",
                                  "Facebook's Artificial Intelligence Research",
                                  "Facebook's Artificial Intelligence team is working to build smart systems that can enhance people's lives. Watch this video to learn about how we're approaching AI research and the impact this work is already having.",
                                  "https://i.ytimg.com/vi/-CRJLam3BNc/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBB81ZLe0zOGzlhMTVU71cNGk_TWg",
                                  "3:01");
    
    post.bounty = this.createBounty(2,
                                    98,
                                    250,
                                    "VIEW");
    
    post.organizational = true;
                 
    return post;
  }
  
  private createPost(postUrn: string,
                     title: string,
                     body: string,
                     createdBy: string,
                     createdAt: string) {
    let post = new Post();
    
    post.urn = postUrn;
    post.title = title;
    post.body = body;
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