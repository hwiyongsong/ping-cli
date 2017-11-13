import { Component } from "@angular/core";

import { ExperimentProvider } from "../../app/providers/experiment.provider";

@Component({
  selector: "configuration-page",
  templateUrl: "configuration.page.html",
})
export class ConfigurationPage {

  constructor(public experimentProvider: ExperimentProvider) {
    // Do nothing.
  }

}