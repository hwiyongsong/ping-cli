import { Component, Input } from "@angular/core";
import { NavController } from "ionic-angular";

import { BountyProvider } from "../../app/providers/bounty.provider";

import { Post } from "../../app/domains/post";

import { PostDetailPage } from "../../pages/post-detail/post-detail.page";

@Component({
  selector: "post-block",
  templateUrl: "post.block.html"
})
export class PostBlock {

  @Input()
  public post: Post;
  
  @Input()
  public layout: string;
  
  constructor(private navController: NavController,
              public bountyProvider: BountyProvider) {
    // Do nothing.
  }
  
  public viewPostDetail() {
    this.navController.push(PostDetailPage, {
      "post": this.post  
    });
  }
  
}