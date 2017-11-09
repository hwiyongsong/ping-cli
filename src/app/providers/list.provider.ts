import { Injectable } from "@angular/core";

import { Bounty } from "../domains/bounty";
import { Image } from "../domains/image";
import { List } from "../domains/list";

import { StringUtils } from "../utils/string-utils";

@Injectable()
export class ListProvider {
    
  public mockLists: Array<List> = [];
  
  constructor() { 
    this.initLists();
  }
  
  private initLists() {
    this.mockLists.push(this.createBlockchainVCs());
    this.mockLists.push(this.createBlockchainAngelInvestors());
    this.mockLists.push(this.createStartupFounders());
    this.mockLists.push(this.createSmartContractDevelopers());
    this.mockLists.push(this.createMobileDesigners());
    this.mockLists.push(this.createTechJournalists());
  }
  
  private createBlockchainVCs(): List {
    let list = this.createList("urn:list:blockchain-vcs",
                               "Blockchain VCs",
                               "Reach venture capitalists interested in funding new and existing blockchain startups.",
                               "50+",
                               "https://avatars0.githubusercontent.com/u/424443?s=460&v=4");
    
    list.bounty = this.createBounty(100);
    
    return list;
  }
  
  private createBlockchainAngelInvestors(): List {
    let list = this.createList("urn:list:blockchain-angels",
                               "Blockchain Angels",
                               "Reach angel investors interested in launching startups.",
                               "75+",
                               "https://avatars1.githubusercontent.com/u/6844772?s=88&v=4");
    
    list.bounty = this.createBounty(50);
    
    return list;
  }
  
  private createStartupFounders(): List {
    let list = this.createList("urn:list:startup-founders",
                               "Startup Founders",
                               "Reach founders of tech startups, VC firms, prominent nonprofits, and popular open source projects.",
                               "150+",
                               "https://avatars1.githubusercontent.com/u/302001?s=88&v=4");
    
    list.bounty = this.createBounty(30);
    
    return list;
  }
  
  private createSmartContractDevelopers(): List {
    let list = this.createList("urn:list:smart-contract-developers",
                               "Smart Contract Developers",
                               "Reach software engineers experienced in smart contract development in the blockchain stack.",
                               "200+",
                               "https://avatars1.githubusercontent.com/u/14793288?s=400&v=4");
    
    list.bounty = this.createBounty(10);
    
    return list;
  }
  
  private createMobileDesigners(): List {
    let list = this.createList("urn:list:mobile-designers",
                               "Mobile Designers",
                               "Reach UI mobile designers experienced in iOS and Android.",
                               "150+",
                               "https://avatars0.githubusercontent.com/u/22736?s=88&v=4");
    
    list.bounty = this.createBounty(10);
    
    return list;
  }
  
  private createTechJournalists(): List {
    let list = this.createList("urn:list:tech-journalists",
                               "Tech Journalists",
                               "Reach journalists from tech websites, publications, and blogs.",
                               "50+",
                               "https://avatars0.githubusercontent.com/u/17126954?s=88&v=4");
    
    list.bounty = this.createBounty(50);
    
    return list;
  }
  
  private createList(urn: string,
                     name: string,
                     description: string,
                     size: string,
                     profileImageUrl: string): List {
    let list = new List();
    
    list.urn = urn;
    list.name = name;
    list.description = description;
    list.size = size;
    
    if (profileImageUrl) {
      list.profileImage = new Image();
      list.profileImage.urn = "urn:image:" + StringUtils.generateUUID();
      list.profileImage.url = profileImageUrl;
    }
    
    return list;
  }
  
  private createBounty(value: number) {
    let bounty = new Bounty();
    
    bounty.value = value;
    bounty.condition = "REPLY";
    
    return bounty;
  }
  
}