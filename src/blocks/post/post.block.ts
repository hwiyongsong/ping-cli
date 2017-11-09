import { Component, Input } from "@angular/core";

import { BountyProvider } from "../../app/providers/bounty.provider";

import { Post } from "../../app/domains/post";

@Component({
  selector: "post-block",
  templateUrl: "post.block.html"
})
export class PostBlock {

  @Input()
  public post: Post;
  
  @Input()
  public layout: string;
  
  constructor(public bountyProvider: BountyProvider) {
    // Do nothing.
  }
  
}