import { Injectable } from "@angular/core";

@Injectable()
export class ExperimentProvider {
    
  public currencyExperiment: string;
  
  constructor() { 
    this.initExperiments();
  }
  
  private initExperiments() {
    this.currencyExperiment = "DOLLARS";
  }
  
}