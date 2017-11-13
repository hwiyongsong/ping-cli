import { Injectable } from "@angular/core";

@Injectable()
export class ExperimentProvider {
    
  public tokenExperiment: string; // CAN BE 'UTILITY', 'LICENSE', or 'PERSONAL'.
  public currencyExperiement: string; // CAN BE 'PNG', 'ETH', 'BTC', or 'DOLLAR'.
  
  constructor() { 
    this.initExperiments();
  }
  
  private initExperiments() {
    this.tokenExperiment = "UTILITY";
    this.currencyExperiement = "PNG";
  }
  
}