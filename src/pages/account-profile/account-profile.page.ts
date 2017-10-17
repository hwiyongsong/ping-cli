import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

@Component({
  selector: "account-profile-page",
  templateUrl: "account-profile.page.html",
})
export class AccountProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad AccountProfilePage");
  }

}
