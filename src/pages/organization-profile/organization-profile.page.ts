import { Component } from "@angular/core";
import { NavParams } from "ionic-angular";

import { Organization } from "../../app/domains/organization";

@Component({
  selector: "organization-profile-page",
  templateUrl: "organization-profile.page.html",
})
export class OrganizationProfilePage {
    
  public organization: Organization;

  constructor(params: NavParams) {
    this.organization = params.get("organization");
  }

}