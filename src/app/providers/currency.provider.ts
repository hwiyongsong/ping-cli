import { Injectable } from "@angular/core";

import { ExperimentProvider } from "./experiment.provider";

import { TokenUtils } from "../utils/token-utils";

@Injectable()
export class CurrencyProvider {
  
  constructor(private experimentProvider: ExperimentProvider) { 
    // Do nothing.
  }
  
  toTokens(value: number): string {
    if (this.experimentProvider.currencyExperiement == "PNG") {
      let pings = TokenUtils.toPing(value);
      return pings + " PNG";
    }
    
    if (this.experimentProvider.currencyExperiement == "ETH") {
      let ethers = TokenUtils.toEther(value);
      return ethers + " ETH";
    }
    
    if (this.experimentProvider.currencyExperiement == "BTC") {
      let bitcoins = TokenUtils.toBitcoin(value);
      return bitcoins + " BTC";
    }
    
    return null;
  }
  
  toDollars(value: number): string {
    return "$" + value;
  }
  
  format(value: number, prefix: string = "", suffix: string = ""): string {
    let dollars = "$" + value;
    
    if (this.experimentProvider.currencyExperiement == "PNG") {
      let pings = TokenUtils.toPing(value);
      return prefix + pings + " PNG <span class='dollars'>• " + dollars + "<span>" + suffix;
    }
    
    if (this.experimentProvider.currencyExperiement == "ETH") {
      let ethers = TokenUtils.toEther(value);
      return prefix + ethers + " ETH <span class='dollars'>• " + dollars + "<span>" + suffix;
    }
    
    if (this.experimentProvider.currencyExperiement == "BTC") {
      let bitcoins = TokenUtils.toBitcoin(value);
      return prefix + bitcoins + " BTC <span class='dollars'>• " + dollars + "<span>" + suffix;
    }

    return prefix + "<span class='dollars'>" + dollars + "<span>" + suffix;
  }
  
}