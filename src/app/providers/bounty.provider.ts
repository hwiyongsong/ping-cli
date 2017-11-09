import { Injectable } from "@angular/core";

import { ExperimentProvider } from "./experiment.provider";

import { Bounty } from "../domains/bounty";

@Injectable()
export class BountyProvider {
  
  constructor(experimentProvider: ExperimentProvider) { 
    // Do nothing.
  }
  
  formatBounty(bounty: Bounty): string {
    return "$" + bounty.value; 
  }
  
}