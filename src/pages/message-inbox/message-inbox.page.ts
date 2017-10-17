import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

@Component({
  selector: "message-inbox-page",
  templateUrl: "message-inbox.page.html",
})
export class MessageInboxPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad MessageInboxPage");
  }

}
