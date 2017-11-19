import { Component, EventEmitter, Input, Output } from "@angular/core";

import { Feed } from "../../app/domains/feed";

@Component({
  selector: "feed-block",
  templateUrl: "feed.block.html"
})
export class FeedBlock {
    
  @Input()
  public feed: Feed = new Feed();
  
  @Output()
  public notify: EventEmitter<string> = new EventEmitter<string>();
  
  onNotify(event) {
    this.notify.emit(event); 
  }
  
}