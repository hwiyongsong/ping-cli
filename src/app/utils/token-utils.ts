import { NumberUtils } from "./number-utils";

export class TokenUtils {
  
  public static BITCOIN_TO_DOLLARS = 5928.95;
  public static ETHER_TO_DOLLARS = 325.90;
  public static PING_TO_DOLLARS = 0.24;
  
  static toBitcoin(dollars: number): number {
    let bitcoins = dollars / TokenUtils.BITCOIN_TO_DOLLARS;
    return NumberUtils.round(bitcoins, 4);
  }
  
  static toEther(dollars: number): number {
    let ethers = dollars / TokenUtils.ETHER_TO_DOLLARS;
    return NumberUtils.round(ethers, 3);
  }
  
  static toPing(dollars: number): number {
    let pings = dollars / TokenUtils.PING_TO_DOLLARS;
    return NumberUtils.round(pings, 2);
  }
  
}