import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

import { CurrencyProvider } from "../../app/providers/currency.provider";

import { Post } from "../../app/domains/post";

import { UserProfilePage } from "../user-profile/user-profile.page";

@Component({
  selector: "post-detail-page",
  templateUrl: "post-detail.page.html",
})
export class PostDetailPage {

  public post: Post;
  
  constructor(params: NavParams, 
              private navController: NavController,
              public currencyProvider: CurrencyProvider) {
    this.post = params.get("post");
  }
  
  onViewUserProfile() {
    this.navController.push(UserProfilePage, {
      "user": this.post.createdBy
    });
  }
  
  onViewOrganizationProfile() {
    alert("Looks like that's a mock..."); 
  }
  
  onAction() {
    alert("Looks like that's a mock..."); 
  }

}