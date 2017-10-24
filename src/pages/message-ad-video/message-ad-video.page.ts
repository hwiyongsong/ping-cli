import { Component } from "@angular/core";
import { NavParams } from "ionic-angular";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "message-ad-video-page",
  templateUrl: "message-ad-video.page.html",
})
export class MessageAdVideoPage {

  private videoUrl: string;
  
  constructor(params: NavParams,
              private sanitizer: DomSanitizer) {
    this.videoUrl = params.get("url");
  }

}
