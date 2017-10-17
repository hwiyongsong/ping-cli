import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

@Component({
  selector: "account-settings-page",
  templateUrl: "account-settings.page.html",
})
export class AccountSettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad AccountSettingsPage");
  }

}
