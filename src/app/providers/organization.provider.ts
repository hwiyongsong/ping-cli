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
    
    return null;
  }
  
  private initMockOrganizations() {
    this.mockOrganizations.push(this.createGoogle());
    this.mockOrganizations.push(this.createFacebook());
    this.mockOrganizations.push(this.createUber());
    this.mockOrganizations.push(this.createAirbnb());
    this.mockOrganizations.push(this.createNetflix());
    this.mockOrganizations.push(this.createBerkeley());
    this.mockOrganizations.push(this.createStanford());
  }
  
  private createGoogle(): Organization {
    return this.createMockOrganization("urn:company:google",
                                       "Google",
                                       "Google\u2019s mission is to organize the world\u2018s information and make it universally accessible and useful. \r\n\r\nSince our founding in 1998, Google has grown by leaps and bounds. From offering search in a single language we now offer dozens of products and services\u2014including various forms of advertising and web applications for all kinds of tasks\u2014in scores of languages. And starting from two computer science students in a university dorm room, we now have thousands of employees and offices around the world. A lot has changed since the first Google search engine appeared. But some things haven\u2019t changed: our dedication to our users and our belief in the possibilities of the Internet itself.",
                                       "Mountain View, CA",
                                       "www.google.com",
                                       "https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAALTAAAAJGY1NGY1N2ZhLTNmZmUtNGRmZi1iMDgxLTJjZjdkNjNkYmZlOQ.png");

  }

  private createFacebook(): Organization {
    return this.createMockOrganization("urn:company:faceook",
                                       "Facebook",
                                       "Founded in 2004, Facebook\u2019s mission is to give people the power to build community and bring the world closer together. People use Facebook to stay connected with friends and family, to discover what\u2019s going on in the world, and to share and express what matters to them.\r\n\r\nFacebook is defined by our unique culture \u2013 one that rewards impact. We encourage people to be bold and solve the problems they care most about. We work in small teams and move fast to develop new products, constantly iterating. The phrase \u201Cthis journey is 1% finished,\u201D reminds us that we\u2019ve only begun to fulfill our mission to bring the world closer together. \r\n\r\nFor a full listings of our jobs, visit www.facebook.com/careers\r\n\r\n*Thank you for visiting our page. We welcome conversation and reserve the right to remove any comments that constitute harassment, hate speech, abuse, libel, or spam.",
                                       "Menlo Park, CA",
                                       "www.facebook.com",
                                       "https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAYRAAAAJDVlMzBlYjNiLTAxN2QtNGQxZC1iZTAzLTlmNWQ1OTE4OGY4ZA.png");

  }

  private createUber(): Organization {
    return this.createMockOrganization("urn:company:uber",
                                       "Uber",
                                       "We believe that by solving some of the biggest problems of our time, we can create a future where there is limitless freedom of movement for people and things all across the world. Just talk to our people \u2014 and feel their passion, optimism and curiosity for building solutions every single day on behalf of drivers, riders, couriers, eaters and employees.\r\n\r\nWhile the tough problems we face everyday can be incredibly difficult to figure out, we believe those same problems enable us to personally grow the most. So we welcome people from all backgrounds who have the passion to change the world and also want to help create a supportive and collaborative environment. So that ultimately, we can learn together, solve together, build together, and move the world forward together.",
                                       "San Francisco, CA",
                                       "www.uber.com",
                                       "https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAqwAAAAJDAzZGFhNTg1LWU3ZmYtNGFlZS05YWI1LWQ2MmMyZTIxOTliNw.png");

  }

  private createAirbnb(): Organization {
    return this.createMockOrganization("urn:company:airbnb",
                                       "Airbnb",
                                       "Founded in August of 2008 and based in San Francisco, California, Airbnb is a trusted community marketplace for people to list, discover, and book unique accommodations around the world \u2014 online or from a mobile phone. Whether an apartment for a night, a castle for a week, or a villa for a month, Airbnb connects people to unique travel experiences, at any price point, in more than 33,000 cities and 192 countries. And with world-class customer service and a growing community of users, Airbnb is the easiest way for people to monetize their extra space and showcase it to an audience of millions.  \r\n\r\nNo global movement springs from individuals. It takes an entire team united behind something big. Together, we work hard, we laugh a lot, we brainstorm nonstop, we use hundreds of Post-Its a week, and we give the best high-fives in town. Headquartered in San Francisco, we have satellite offices in Dublin, London, Barcelona, Paris, Milan, Copenhagen, Berlin, Moscow, S\u00E3o Paolo, Sydney, and Singapore.",
                                       "San Francisco, CA",
                                       "www.airbnb.com",
                                       "https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAheAAAAJDczNWVlYWU3LTU3MTktNDk1ZS04ODZlLTAyNzE1ODQ3Yjg1Mw.png");

  }

  private createNetflix(): Organization {
    return this.createMockOrganization("urn:company:netflix",
                                       "Netflix",
                                       "Netflix has been leading the way for digital content since 1997\r\n\r\nNetflix is the world\u2019s leading Internet entertainment network with over 100 million members in over 190 countries enjoying more than 125 million hours of TV shows and movies per day, including original series, documentaries and feature films. Members can watch as much as they want, anytime, anywhere, on nearly any Internet-connected screen. Members can play, pause and resume watching, all without commercials or commitments.",
                                       "Los Gatos, CA",
                                       "www.netflix.com",
                                       "https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAg7AAAAJDEzYzRjNzY3LTNiYWEtNDI4OC05OGFhLTE1YmZiNmIyZjNlMw.png");

  }

  private createBerkeley(): Organization {
    return this.createMockOrganization("urn:school:berkeley",
                                       "University of California, Berkeley",
                                       "A wellspring of innovation, the school occupies a 1,232-acre campus near downtown Berkeley. UC Berkeley, also known as Cal, was established in 1868 as the flagship of today&rsquo;s 10-campus University of California.",
                                       "Berkeley, CA",
                                       "berkeley.edu",
                                       "https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAutAAAAJDY3YjIwODk0LTEyYjctNGM4OS04N2U1LWI0MDNlY2UxMGE1NQ.png");

  }

  private createStanford(): Organization {
    return this.createMockOrganization("urn:school:stanford",
                                       "Stanford University",
                                       "Stanford University is one of the world's leading research universities. Stanford is known for its entrepreneurial character, drawn from the legacy of its founders, Jane and Leland Stanford, and its relationship to Silicon Valley. Research and teaching stresses interdisciplinary approaches to problem solving. Areas of excellence range from the humanities to social sciences to engineering and the sciences. Stanford is located in California's Bay Area, one of the most intellectually dynamic and culturally diverse areas of the nation.",
                                       "Stanford, CA",
                                       "stanford.edu",
                                       "https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAjhAAAAJDI5NWY1NDgxLTJjNDAtNDE5Yy1iYWNkLTkxMDFjMTM3YmExYw.png");

  }
  
  private createMockOrganization(organizationUrn: string,
                                 name: string,
                                 description: string,
                                 location: string,
                                 website: string,
                                 profileImageUrl: string): Organization {
    let organization = new Organization();
    
    organization.urn = organizationUrn;
    organization.name = name;
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