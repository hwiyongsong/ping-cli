import { Injectable } from "@angular/core";

import { Community } from "../domains/community";
import { Image } from "../domains/image";

import { StringUtils } from "../utils/string-utils";

@Injectable()
export class CommunityProvider {
    
  private mockCommunities: Array<Community> = [];
  
  constructor() { 
    this.initMockCommunities();
  }
  
  getCommunityByCommunityUrn(communityUrn: string): Community {
    for (let community of this.mockCommunities) {
      if (community.urn == communityUrn) {
        return community;
      }
    }
    
    console.log("** Unable to find: " + communityUrn);
    return null;
  }
  
  private initMockCommunities() {
    this.mockCommunities.push(this.createEntrepreneur());
    this.mockCommunities.push(this.createEthereum());
    this.mockCommunities.push(this.createBitcoin());
    this.mockCommunities.push(this.createArtificialIntelligence());
    this.mockCommunities.push(this.createPolitics());
    this.mockCommunities.push(this.createHealthWellness());
  }
  
  private createEntrepreneur(): Community {
    return this.createMockCommunity("urn:community:entrepreneur",
                                    "Entrepreneur",
                                    176,
                                    "https://cdn.dribbble.com/users/52265/screenshots/2823797/lightbulb_icon_800x600.gif");
  }
  
  private createEthereum(): Community {
    return this.createMockCommunity("urn:community:ethereum",
                                    "Ethereum",
                                    214,
                                    "http://files.coinmarketcap.com.s3-website-us-east-1.amazonaws.com/static/img/coins/200x200/ethereum.png");
  }

  private createBitcoin(): Community {
    return this.createMockCommunity("urn:community:bitcoin",
                                   "Bitcoin",
                                   365,
                                   "https://bitcoin.org/img/icons/opengraph.png");
  }
  
  private createArtificialIntelligence(): Community {
    return this.createMockCommunity("urn:community:ai",
                                    "Artificial Intelligence",
                                    87,
                                    "http://smdhr.com/wp-content/uploads/2017/06/artificial-intelligence-square.jpg");
  }
  
  private createPolitics(): Community {
    return this.createMockCommunity("urn:community:politics",
                                    "Politics",
                                    168,
                                    "http://www.kirbasinstitute.com/wp-content/uploads/2016/02/Politics-of-nature.jpg");
  }
  
  private createHealthWellness(): Community {
    return this.createMockCommunity("urn:community:health-wellness",
                                    "Health and Wellness",
                                    112,
                                    "https://thecliparts.com/wp-content/uploads/2017/06/symbol-wellness-clipart.jpg");
  }
  
  private createMockCommunity(communityUrn: string,
                              name: string,
                              size: number,
                              profileImageUrl: string): Community {
    let community = new Community();
    
    community.urn = communityUrn;
    community.name = name;
    community.size = size;
    
    if (profileImageUrl) {
      community.profileImage = new Image();
      community.profileImage.urn = "urn:image:" + StringUtils.generateUUID();
      community.profileImage.url = profileImageUrl;
    }
    
    return community;
  }
  
}