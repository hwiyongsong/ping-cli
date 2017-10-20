import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

import { ComingSoonPage } from "./coming-soon/coming-soon.page";

@Component({
  templateUrl: "main.page.html"
})
export class MainPage {
    
  constructor(private navController: NavController) {
    // Do nothing.
  }

  public homeRoot: any = ComingSoonPage;
  public searchRoot: any = ComingSoonPage;
  public inboxRoot: any = ComingSoonPage;
  public accountRoot: any = ComingSoonPage;

}