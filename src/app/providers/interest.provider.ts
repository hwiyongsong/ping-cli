import { Injectable } from "@angular/core";

import { Image } from "../domains/image";
import { Interest } from "../domains/interest";

import { StringUtils } from "../utils/string-utils";

@Injectable()
export class InterestProvider {
    
  private mockInterests: Array<Interest> = [];
  
  constructor() { 
    this.initMockInterests();
  }
  
  getInterestByInterestUrn(interestUrn: string): Interest {
    for (let interest of this.mockInterests) {
      if (interest.urn == interestUrn) {
        return interest;
      }
    }
    
    return null;
  }
  
  private initMockInterests() {
    this.mockInterests.push(this.createTedTalk());
    this.mockInterests.push(this.createBlizzard());
    this.mockInterests.push(this.createEthereum());
    this.mockInterests.push(this.createBitcoin());
    this.mockInterests.push(this.createApple());
    this.mockInterests.push(this.createAndroid());
    this.mockInterests.push(this.createGameOfThrones());
  }
  
  private createTedTalk(): Interest {
    return this.createMockInterest("urn:interest:ted-talk",
                                   "Ted Talk",
                                   "https://media.licdn.com/mpr/mpr/shrink_120_120/p/8/000/1ee/3ce/12d3b23.png");
  }

  private createBlizzard(): Interest {
    return this.createMockInterest("urn:interest:blizzard",
                                   "Blizzard",
                                   "https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAA15AAAAJDdjZWZmNjUyLTY2MTktNDcxNS1hY2Y1LTQ4NjNhMWY0YTQ3NQ.png");
  }

  private createEthereum(): Interest {
    return this.createMockInterest("urn:interest:ethereum",
                                   "Ethereum",
                                   "http://files.coinmarketcap.com.s3-website-us-east-1.amazonaws.com/static/img/coins/200x200/ethereum.png");
  }

  private createBitcoin(): Interest {
    return this.createMockInterest("urn:interest:bitcoin",
                                   "Bitcoin",
                                   "https://bitcoin.org/img/icons/opengraph.png");
  }

  private createApple(): Interest {
    return this.createMockInterest("urn:interest:apple",
                                   "Apple",
                                   "https://image.freepik.com/free-icon/apple-logo_318-40184.jpg");
  }

  private createAndroid(): Interest {
    return this.createMockInterest("urn:interest:android",
                                   "Android",
                                   "https://i.pinimg.com/originals/db/80/b5/db80b535b4c4e5280ab511936177506d.png");
  }

  private createGameOfThrones(): Interest {
    return this.createMockInterest("urn:interest:game-of-thrones",
                                   "Game of Thrones",
                                   "https://yt3.ggpht.com/-yz_glt4VwG4/AAAAAAAAAAI/AAAAAAAAAAA/ODIt197blfI/s900-c-k-no-mo-rj-c0xffffff/photo.jpg");
  }
  
  private createMockInterest(interestUrn: string,
                             name: string,
                             profileImageUrl: string): Interest {
    let interest = new Interest();
    
    interest.urn = interestUrn;
    interest.name = name;
    
    if (profileImageUrl) {
      interest.profileImage = new Image();
      interest.profileImage.urn = "urn:image:" + StringUtils.generateUUID();
      interest.profileImage.url = profileImageUrl;
    }
    
    return interest;
  }
  
}