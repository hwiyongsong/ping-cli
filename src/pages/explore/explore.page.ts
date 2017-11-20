import { Component } from "@angular/core";

import { ListProvider } from "../../app/providers/list.provider";
import { PostProvider } from "../../app/providers/post.provider";
import { UserProvider } from "../../app/providers/user.provider";

import { Feed } from "../../app/domains/feed";
import { Post } from "../../app/domains/post";

@Component({
  selector: "explore-page",
  templateUrl: "explore.page.html",
})
export class ExplorePage {
    
  public feed: Feed;
  public segment: string = "SEND";

  constructor(public listProvider:ListProvider,
              public postProvider: PostProvider,
              public userProvider: UserProvider) {
    this.feed = this.createMockFeed();
  }
  
  private createMockFeed(): Feed {
    let feed = new Feed();
    
    feed.push(this.getAbookBlock());
    feed.push(this.getPingMeJobReferralPost());
    feed.push(this.getUportProjectPost());
    feed.push(this.getBitAboutBancorPost());
    feed.push(this.getAirbnbSurveyPost()); 
    
    return feed;
  }
  
  private getAbookBlock(): any {
    return {
      "urn": "urn:abook:block" 
    }
  }
  
  private getPingMeJobReferralPost(): Post {
    let post = this.postProvider.getPostByPostUrn("urn:post:pingme-job-referral");
    post.reason = "<strong>Trending</strong> in your network";
    return post;
  }
  
  private getUportProjectPost(): Post {
    let post = this.postProvider.getPostByPostUrn("urn:post:uport-project");
    post.reason = "Since you're following <strong>Blockchain</strong>";
    return post;
  }
  
  private getBitAboutBancorPost(): Post {
    let post = this.postProvider.getPostByPostUrn("urn:post:bit-about-bancor");
    post.reason = "Since you're following <strong>Blockchain</strong>";
    return post;
  }

  private getAirbnbSurveyPost(): Post {
    let post = this.postProvider.getPostByPostUrn("urn:post:airbnb-survey");
    post.reason = "Since you're following <strong>UI Design</strong>";
    return post;
  }
  
}