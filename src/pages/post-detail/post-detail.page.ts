import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

import { BountyProvider } from "../../app/providers/bounty.provider";

import { Post } from "../../app/domains/post";

import { MemberProfilePage } from "../member-profile/member-profile.page";

@Component({
  selector: "post-detail-page",
  templateUrl: "post-detail.page.html",
})
export class PostDetailPage {

  public post: Post;
  
  constructor(params: NavParams, 
              private navController: NavController,
              public bountyProvider: BountyProvider) {
    this.post = params.get("post");
  }
  
  onViewMemberProfile() {
    this.navController.push(MemberProfilePage, {
      "account": this.post.createdBy
    });
  }
  
  onViewOrganizationProfile() {
    alert("Looks like that's a mock..."); 
  }
  
  onAction() {
    alert("Looks like that's a mock..."); 
  }

}