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
    this.mockPosts.push(this.createFacebookArtificialIntelligenceResearch());
  }
  
  private createFacebookArtificialIntelligenceResearch() {
    let post = this.createPost("urn:post:facebook-ai-research",
                               "urn:member:akash-gupta",
                               "Boxes | Let's Unlock Cities",
                               "<h3>Advancing the field of machine intelligence</h3> <h5>We are committed to advancing the field of machine intelligence and are creating new technologies to give people better ways to communicate. In short, to solve AI.</h5> <p>Facebook Artificial Intelligence Researchers (FAIR) seek to understand and develop systems with human level intelligence by advancing the longer-term academic problems surrounding AI. Our research covers the full spectrum of topics related to AI, and to deriving knowledge from data: theory, algorithms, applications, software infrastructure and hardware infrastructure. Long-term objectives of understanding intelligence and building intelligent machines are bold and ambitious, and we know that making significant progress towards AI can’t be done in isolation. That’s why we actively engage with the research community through publications, open source software, participation in technical conferences and workshops, and collaborations with colleagues in academia.</p> <p>Facebook AI Researchers are based in Menlo Park, New York City and Paris, France.</p> <p>Check us out at <a href='https://research.fb.com/category/facebook-ai-research-fair/'>https://research.fb.com/category/facebook-ai-research-fair/</a>.",
                               "Nov 2, 2017");
    
    post.video = this.createVideo("https://www.youtube.com/watch?v=-CRJLam3BNc",
                                  "Facebook's Artificial Intelligence Research",
                                  "Facebook's Artificial Intelligence team is working to build smart systems that can enhance people's lives. Watch this video to learn about how we're approaching AI research and the impact this work is already having.",
                                  "https://i.ytimg.com/vi/-CRJLam3BNc/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBB81ZLe0zOGzlhMTVU71cNGk_TWg",
                                  "3:01");
    
    post.bounty = this.createBounty(2.50,
                                    98,
                                    250);
                 
    return post;
  }
  
  private createPost(postUrn: string,
                     fromUrn: string,
                     title: string,
                     body: string,
                     createdAt: string) {
    let post = new Post();
    
    post.urn = postUrn;
    post.from = this.accountProvider.getAccountByAccountUrn(fromUrn);;
    post.title = title;
    post.body = body;
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
                       viewLimit: number) {
    let bounty = new Bounty();
    
    bounty.value = value;
    bounty.viewCount = viewCount;
    bounty.viewLimit = viewLimit;
    
    return bounty;
  }
  
}