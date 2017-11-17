import { Component, Input } from "@angular/core";
import { NavController } from "ionic-angular";

import { CurrencyProvider } from "../../app/providers/currency.provider";

import { Post } from "../../app/domains/post";

import { UserProfilePage } from "../../pages/user-profile/user-profile.page";
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
  
  onViewPostDetail() {
    this.navController.push(PostDetailPage, {
      "post": this.post  
    });
  }
  
  onViewUserProfile() {
    this.navController.push(UserProfilePage, {
      "user": this.post.createdBy
    });
  }
  
}