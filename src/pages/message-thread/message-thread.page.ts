import { Component } from "@angular/core";
import { NavParams } from "ionic-angular";

import { Thread } from "../../app/domains/thread";

@Component({
  selector: "message-thread-page",
  templateUrl: "message-thread.page.html",
})
export class MessageThreadPage {

  public thread: Thread;
  
  constructor(params: NavParams) {
    this.thread = params.get("thread");
  }

}
