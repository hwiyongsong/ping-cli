import { Component, Input } from "@angular/core";
import { NavController } from "ionic-angular";

import { CurrencyProvider } from "../../app/providers/currency.provider";

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
              public currencyProvider: CurrencyProvider) {
    // Do nothing.
  }
  
  public viewPostDetail() {
    this.navController.push(PostDetailPage, {
      "post": this.post  
    });
  }
  
}