import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

@Component({
  selector: "message-detail-page",
  templateUrl: "message-detail.page.html",
})
export class MessageDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad MessageDetailPage");
  }

}
