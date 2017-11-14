import { Injectable } from "@angular/core";

import { Image } from "../domains/image";
import { Organization } from "../domains/organization";

import { StringUtils } from "../utils/string-utils";

@Injectable()
export class OrganizationProvider {
  
  private mockOrganizations: Array<Organization> = [];
  
  constructor() { 
    this.initMockOrganizations();
  }
  
  getOrganizationByOrganizationUrn(organizationUrn: string): Organization {
    for (let organization of this.mockOrganizations) {
      if (organization.urn == organizationUrn) {
        return organization;
      }
    }
    
    console.log("** Unable to find: " + organizationUrn);
    return null;
  }
  
  private initMockOrganizations() {
    this.mockOrganizations.push(this.createGoogle());
    this.mockOrganizations.push(this.createFacebook());
    this.mockOrganizations.push(this.createMicrosoft());
    this.mockOrganizations.push(this.createLinkedIn());
    this.mockOrganizations.push(this.createAmazon());
    this.mockOrganizations.push(this.createUber());
    this.mockOrganizations.push(this.createAirbnb());
    this.mockOrganizations.push(this.createNetflix());
    this.mockOrganizations.push(this.createLockheedMartin());
    this.mockOrganizations.push(this.createConsensys());
    this.mockOrganizations.push(this.createUPort());
    this.mockOrganizations.push(this.createBancor());
    this.mockOrganizations.push(this.createPingMe());
    this.mockOrganizations.push(this.createPiicked());
    this.mockOrganizations.push(this.createDemandTec());
    this.mockOrganizations.push(this.createBerkeley());
    this.mockOrganizations.push(this.createStanford());
    this.mockOrganizations.push(this.createCarnegieMellon());
    this.mockOrganizations.push(this.createPrinceton());
  }
  
  private createGoogle(): Organization {
    return this.createMockOrganization("urn:company:google",
                                       "Google",
                                       "Don't be evil",
                                       "Google\u2019s mission is to organize the world\u2018s information and make it universally accessible and useful. <br/><br/>Since our founding in 1998, Google has grown by leaps and bounds. From offering search in a single language we now offer dozens of products and services\u2014including various forms of advertising and web applications for all kinds of tasks\u2014in scores of languages. And starting from two computer science students in a university dorm room, we now have thousands of employees and offices around the world. A lot has changed since the first Google search engine appeared. But some things haven\u2019t changed: our dedication to our users and our belief in the possibilities of the Internet itself.",
                                       "Mountain View, CA",
                                       "www.google.com",
                                       "https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAALTAAAAJGY1NGY1N2ZhLTNmZmUtNGRmZi1iMDgxLTJjZjdkNjNkYmZlOQ.png");
  }

  private createFacebook(): Organization {
    return this.createMockOrganization("urn:company:facebook",
                                       "Facebook",
                                       "Bring the world closer together",
                                       "Founded in 2004, Facebook\u2019s mission is to give people the power to build community and bring the world closer together. People use Facebook to stay connected with friends and family, to discover what\u2019s going on in the world, and to share and express what matters to them.<br/><br/>Facebook is defined by our unique culture \u2013 one that rewards impact. We encourage people to be bold and solve the problems they care most about. We work in small teams and move fast to develop new products, constantly iterating. The phrase \u201Cthis journey is 1% finished,\u201D reminds us that we\u2019ve only begun to fulfill our mission to bring the world closer together. <br/><br/>For a full listings of our jobs, visit www.facebook.com/careers<br/><br/>*Thank you for visiting our page. We welcome conversation and reserve the right to remove any comments that constitute harassment, hate speech, abuse, libel, or spam.",
                                       "Menlo Park, CA",
                                       "www.facebook.com",
                                       "https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAYRAAAAJDVlMzBlYjNiLTAxN2QtNGQxZC1iZTAzLTlmNWQ1OTE4OGY4ZA.png");
  }
  
  private createMicrosoft(): Organization {
    return this.createMockOrganization("urn:company:microsoft",
                                       "Microsoft",
                                       "Empowering us all",
                                       "At Microsoft, our mission is to empower every person and every organization on the planet to achieve more. Our mission is grounded in both the world in which we live and the future we strive to create. Today, we live in a mobile-first, cloud-first world, and the transformation we are driving across our businesses is designed to enable Microsoft and our customers to thrive in this world. <br/><br/>We do business in 170 countries and are made up of 114,000 passionate employees dedicated to fulfilling our mission of helping you and your organization achieve more.",
                                       "Redmond, WA",
                                       "www.microsoft.com",
                                       "https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAjfAAAAJGMyYmExNThhLTNlYmMtNDAzYi05MmNmLWFmOTY1NDcyMTFjMA.png");
  }
  
  private createLinkedIn(): Organization {
    return this.createMockOrganization("urn:company:linkedin",
                                       "LinkedIn",
                                       "Connecting the world's professionals",
                                       "Finding the right job begins with your connections. Get started on LinkedIn. #TheWayIn<br/><br/>Founded in 2003, LinkedIn connects the world\'s professionals to make them more productive and successful. With more than 530 million members worldwide, including executives from every Fortune 500 company, LinkedIn is the world\'s largest professional network on the Internet. The company has a diversified business model with revenue coming from Talent Solutions, Marketing Solutions, and Premium Subscriptions products. Headquartered in Silicon Valley, LinkedIn has offices across the globe.",
                                       "Sunnyvale, CA",
                                       "www.linkedin.com",
                                       "https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAANyAAAAJGRlZTNlZDQwLTk4YTItNDA1MS04MzBjLWJmNGQ5M2RmZGUxYw.png");
  }

  private createAmazon(): Organization {
    return this.createMockOrganization("urn:company:amazon",
                                       "Amazon",
                                       "Work Hard. Have Fun. Make History.",
                                       "Amazon strives to be Earth\'s most customer-centric company where people can find and discover virtually anything they want to buy online. By giving customers more of what they want - low prices, vast selection, and convenience - Amazon continues to grow and evolve as a world-class e-commerce platform.<br/><br/>Founded by Jeff Bezos, the Amazon.com website started in 1995 as a place to buy books because of the unique customer experience the Web could offer book lovers. Bezos believed that only the Internet could offer customers the convenience of browsing a selection of millions of book titles in a single sitting. During the first 30 days of business, Amazon fulfilled orders for customers in 50 states and 45 countries - all shipped from his Seattle-area garage.<br/><br/>Amazon\'s evolution from Web site to e-commerce partner to development platform is driven by the spirit of innovation that is part of the company\'s DNA. The world\'s brightest technology minds come to Amazon.com to research and develop technology that improves the lives of shoppers and sellers around the world.",
                                       "Seattle, WA",
                                       "www.amazon.com",
                                       "https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAA0ZAAAAJDk1ZjA0ZTJmLWQwYWQtNDEwNS04M2QxLTIwM2UxMTE0NTBkMw.png");
  }

  private createUber(): Organization {
    return this.createMockOrganization("urn:company:uber",
                                       "Uber",
                                       "Get there.",
                                       "We believe that by solving some of the biggest problems of our time, we can create a future where there is limitless freedom of movement for people and things all across the world. Just talk to our people \u2014 and feel their passion, optimism and curiosity for building solutions every single day on behalf of drivers, riders, couriers, eaters and employees.<br/><br/>While the tough problems we face everyday can be incredibly difficult to figure out, we believe those same problems enable us to personally grow the most. So we welcome people from all backgrounds who have the passion to change the world and also want to help create a supportive and collaborative environment. So that ultimately, we can learn together, solve together, build together, and move the world forward together.",
                                       "San Francisco, CA",
                                       "www.uber.com",
                                       "https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAqwAAAAJDAzZGFhNTg1LWU3ZmYtNGFlZS05YWI1LWQ2MmMyZTIxOTliNw.png");
  }

  private createAirbnb(): Organization {
    return this.createMockOrganization("urn:company:airbnb",
                                       "Airbnb",
                                       "Belong anywhere.",
                                       "Founded in August of 2008 and based in San Francisco, California, Airbnb is a trusted community marketplace for people to list, discover, and book unique accommodations around the world \u2014 online or from a mobile phone. Whether an apartment for a night, a castle for a week, or a villa for a month, Airbnb connects people to unique travel experiences, at any price point, in more than 33,000 cities and 192 countries. And with world-class customer service and a growing community of users, Airbnb is the easiest way for people to monetize their extra space and showcase it to an audience of millions.  <br/><br/>No global movement springs from individuals. It takes an entire team united behind something big. Together, we work hard, we laugh a lot, we brainstorm nonstop, we use hundreds of Post-Its a week, and we give the best high-fives in town. Headquartered in San Francisco, we have satellite offices in Dublin, London, Barcelona, Paris, Milan, Copenhagen, Berlin, Moscow, S\u00E3o Paolo, Sydney, and Singapore.",
                                       "San Francisco, CA",
                                       "www.airbnb.com",
                                       "https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAheAAAAJDczNWVlYWU3LTU3MTktNDk1ZS04ODZlLTAyNzE1ODQ3Yjg1Mw.png");
  }

  private createNetflix(): Organization {
    return this.createMockOrganization("urn:company:netflix",
                                       "Netflix",
                                       null,
                                       "Netflix has been leading the way for digital content since 1997<br/><br/>Netflix is the world\u2019s leading Internet entertainment network with over 100 million members in over 190 countries enjoying more than 125 million hours of TV shows and movies per day, including original series, documentaries and feature films. Members can watch as much as they want, anytime, anywhere, on nearly any Internet-connected screen. Members can play, pause and resume watching, all without commercials or commitments.",
                                       "Los Gatos, CA",
                                       "www.netflix.com",
                                       "https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAg7AAAAJDEzYzRjNzY3LTNiYWEtNDI4OC05OGFhLTE1YmZiNmIyZjNlMw.png");
  }
  
  private createLockheedMartin(): Organization {
    return this.createMockOrganization("urn:company:lockheed-martin",
                                       "Lockheed Martin",
                                       null,
                                       "Breakthrough performance.<br/>Game-changing innovations. <br/>Unwavering sense of purpose. <br/><br/>Headquartered in Bethesda, Maryland, Lockheed Martin is a global security and aerospace company principally engaged in the research, design, development, manufacture, integration and sustainment of advanced technology systems, products and services.",
                                       "Bethesda, MD",
                                       "http://www.lockheedmartin.com",
                                       "https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAA1vAAAAJGFkN2FhN2ZiLWQzNDEtNGEyMi1hMjQ2LTM1NzA3NTUxZmU0Zg.png");
  }

  private createConsensys(): Organization {
    return this.createMockOrganization("urn:company:consensys",
                                       "Consensys",
                                       null,
                                       "ConsenSys is a blockchain venture production studio. Our global team is building an ecosystem of consumer-centric products and enterprise solutions using blockchain technologies, primarily Ethereum.",
                                       "Brooklyn, NY",
                                       "http://consensys.net",
                                       "https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAWsAAAAJDlmOTBlYWJlLTAzMjctNGQ3OC1iZTViLTUzYTg4ZDAzMjA0NQ.png");
  }
  
  private createUPort(): Organization {
    return this.createMockOrganization("urn:company:uport",
                                       "uPort",
                                       "Identity designed for you.",
                                       "uPort is the leading blockchain identity platform. We are building a self-sovereign identity platform that provides users with a central place to to establish a complete digital identity and authenticate themselves wherever uPort is accepted. We are built on the Ethereum blockchain and are currently being incubated at ConsenSys.",
                                       "Brooklyn, New York",
                                       "http://uport.me",
                                       "https://pbs.twimg.com/profile_images/767715333377523712/10QF-QIE.jpg");
  }
  
  private createBancor(): Organization {
    return this.createMockOrganization("urn:company:bancor",
                                       "Bancor",
                                       "Decentralized Liquidity Network",
                                       "Bancor Protocol™ is a standard for the creation of Smart Tokens™, cryptocurrencies with built-in convertibility directly through their smart contracts. Bancor utilizes an innovative token “Connector” method to enable formulaic price calculation and continuous liquidity for all compliant tokens, without needing to match two parties in an exchange. Smart Tokens™ interconnect to form token liquidity networks, allowing user-generated cryptocurrencies to thrive. For more information, please visit the website and read the Bancor Protocol™ Whitepaper.",
                                       "Zug, Switzerland",
                                       "http://bancor.network",
                                       "https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAu_AAAAJDIxM2RhYThmLTdiZjEtNGUwNC05ZjEyLTY5ZjU2MmJkNmFmMQ.png");
  }

  private createPingMe(): Organization {
    return this.createMockOrganization("urn:company:pingme",
                                       "PingMe",
                                       "Decentralized Attention Economy",
                                       "PingMe aims to bring the currency of attention back to the people.",
                                       "San Francisco, CA",
                                       "http://www.pingme.io",
                                       "https://d3bza9ldbeb18h.cloudfront.net/assets/placeholder-company-b9d0a167b1f7460768517d115285de2337c6e2a84f4285617722efa587c693fc.png");
  }
  
  private createPiicked(): Organization {
    return this.createMockOrganization("urn:company:piicked",
                                       "Piicked",
                                       "Your Personal Eating Guide",
                                       "Piicked is your personal eating guide, helping you discover food suited for your specific dietary profile.",
                                       "San Francisco, CA",
                                       "http://www.piicked.com",
                                       "https://d3bza9ldbeb18h.cloudfront.net/assets/placeholder-company-b9d0a167b1f7460768517d115285de2337c6e2a84f4285617722efa587c693fc.png");
  }
  
  private createDemandTec(): Organization {
    return this.createMockOrganization("urn:company:demandtec",
                                       "DemandTec",
                                       "Optimizing Retail Pricing",
                                       "IBM DemandTec offers a network of cloud apps and insights for more than 500 retailers and consumer products companies, providing common solutions to transact, interact, and collaborate on core merchandising and marketing activities.  DemandTec's services enable customers to achieve their sales volume, revenue, shopper loyalty, and profitability objectives.  Approximately 16,000 retailer and manufacturer end-users on DemandTec collaborated on more than five million trade deals to date.  DemandTec software and analytical services utilize a science-based platform to model and understand consumer behavior.  DemandTec customers include leading retailers and consumer products  companies such as Ahold USA, Best Buy, ConAgra Foods, Delhaize America, General Mills, The Home Depot, Monoprix, PETCO, Safeway, Sara Lee, Target, Walmart, and WH Smith.",
                                       "San Mateo, CA",
                                       "http://www.demandtec.com",
                                       "https://media.licdn.com/mpr/mpr/shrinknp_100_100/p/1/000/18f/079/3164028.png");
  }
  
  private createBerkeley(): Organization {
    return this.createMockOrganization("urn:school:berkeley",
                                       "University of California, Berkeley",
                                       null,
                                       "A wellspring of innovation, the school occupies a 1,232-acre campus near downtown Berkeley. UC Berkeley, also known as Cal, was established in 1868 as the flagship of today&rsquo;s 10-campus University of California.",
                                       "Berkeley, CA",
                                       "berkeley.edu",
                                       "https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAutAAAAJDY3YjIwODk0LTEyYjctNGM4OS04N2U1LWI0MDNlY2UxMGE1NQ.png");
  }

  private createStanford(): Organization {
    return this.createMockOrganization("urn:school:stanford",
                                       "Stanford University",
                                       null,
                                       "Stanford University is one of the world's leading research universities. Stanford is known for its entrepreneurial character, drawn from the legacy of its founders, Jane and Leland Stanford, and its relationship to Silicon Valley. Research and teaching stresses interdisciplinary approaches to problem solving. Areas of excellence range from the humanities to social sciences to engineering and the sciences. Stanford is located in California's Bay Area, one of the most intellectually dynamic and culturally diverse areas of the nation.",
                                       "Stanford, CA",
                                       "stanford.edu",
                                       "https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAjhAAAAJDI5NWY1NDgxLTJjNDAtNDE5Yy1iYWNkLTkxMDFjMTM3YmExYw.png");
  }
  
  private createCarnegieMellon(): Organization {
    return this.createMockOrganization("urn:school:carnegie-mellon",
                                       "Carnegie Mellon University",
                                       null,
                                       "Carnegie Mellon University founder Andrew Carnegie said: \"My heart is in the work.\"\u200B<br/><br/>No statement better captures the passion and drive of our people to make a real difference. <br/><br/>At Carnegie Mellon, we\'re not afraid of the work.<br/><br/>Our educational environment creates problem solvers, drivers of innovation and pioneers in technology and the arts.  <br/><br/>Employers in every field say our graduates are ready to hit the ground running the day they graduate. <br/><br/>So, join us. Whether you\'re looking for a career or an education. Or both.",
                                       "Pittsburgh, PA",
                                       "cmu.edu",
                                       "https://media.licdn.com/mpr/mpr/shrink_200_200/p/6/000/2d0/039/2f00df5.png");
  }
  
  private createPrinceton(): Organization {
    return this.createMockOrganization("urn:school:princeton",
                                       "Princeton Univeristy",
                                       null,
                                       "A vibrant community of learning that endeavors to fulfill its informal motto, '​'​in the nation's service and the service of humanity.'​'​",
                                       "Princeton, NJ",
                                       "http://princeton.edu",
                                       "https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAALWAAAAJGVlNmQ5M2RhLTA1MWItNDZjNy1iZDNlLWY4MTQyNjZlZGRjMw.png");
  }
  
  private createMockOrganization(organizationUrn: string,
                                 name: string,
                                 headline: string,
                                 description: string,
                                 location: string,
                                 website: string,
                                 profileImageUrl: string): Organization {
    let organization = new Organization();
    
    organization.urn = organizationUrn;
    organization.name = name;
    organization.headline = headline;
    organization.description = description;
    organization.location = location;
    organization.website = website;
    
    if (profileImageUrl) {
      organization.profileImage = new Image();
      organization.profileImage.urn = "urn:image:" + StringUtils.generateUUID();
      organization.profileImage.url = profileImageUrl;
    }
    
    return organization;
  }
  
}