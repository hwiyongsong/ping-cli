import { Component } from "@angular/core";

import { InfluencerProvider } from "../../app/providers/influencer.provider";
import { ListProvider } from "../../app/providers/list.provider";
import { PostProvider } from "../../app/providers/post.provider";

@Component({
  selector: "explore-page",
  templateUrl: "explore.page.html",
})
export class ExplorePage {

  constructor(public influencerProvider: InfluencerProvider,
              public listProvider:ListProvider,
              public postProvider: PostProvider) {
    // Do nothing.
  }
  
}