import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

@Component({
  selector: "account-summary-page",
  templateUrl: "account-summary.page.html",
})
export class AccountSummaryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad AccountSummaryPage");
  }

}
