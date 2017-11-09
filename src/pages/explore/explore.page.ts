import { Component } from "@angular/core";

import { ListProvider } from "../../app/providers/list.provider";
import { PostProvider } from "../../app/providers/post.provider";

@Component({
  selector: "explore-page",
  templateUrl: "explore.page.html",
})
export class ExplorePage {

  constructor(public listProvider:ListProvider,
              public postProvider: PostProvider) {
    // Do nothing.
  }
  
}