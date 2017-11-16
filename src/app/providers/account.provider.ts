import { Injectable } from "@angular/core";

import { InterestProvider } from "./interest.provider";
import { OrganizationProvider } from "./organization.provider";

import { Account } from "../domains/account";
import { Education } from "../domains/education";
import { Experience } from "../domains/experience";
import { Image } from "../domains/image";
import { Interest } from "../domains/interest";
import { Relationship } from "../domains/relationship";

import { StringUtils } from "../utils/string-utils";

@Injectable()
export class AccountProvider {
    
  public currentAccount: Account;
  private mockAccounts: Array<Account> = [];
  
  constructor(private interestProvider: InterestProvider,
              private organizationProvider: OrganizationProvider) { 
    this.initMockAccounts();
    this.initCurrentAccount();
  }
  
  getAccountByAccountUrn(accountUrn: string): Account {
    for (let account of this.mockAccounts) {
      if (account.urn == accountUrn) {
        return account;
      }
    }
    
    console.log("** Unable to find: " + accountUrn);
    return null;
  }
  
  getAccounts(): Array<Account> {
    return this.mockAccounts; 
  }
  
  private initCurrentAccount() {
    this.currentAccount = this.getAccountByAccountUrn("urn:member:scott-hartman");
  }
  
  private initMockAccounts() {
    this.mockAccounts.push(this.createScottPredmore());
    this.mockAccounts.push(this.createRobertConner());
    this.mockAccounts.push(this.createLilyLapcokova());
    this.mockAccounts.push(this.createKimKamitani());
    this.mockAccounts.push(this.createAkashGupta());
    this.mockAccounts.push(this.createFrankClemmens());
    this.mockAccounts.push(this.createRitaUrbach());
    this.mockAccounts.push(this.createMichaelSena());
    this.mockAccounts.push(this.createHwiYongSong());
  }
  
  private createScottPredmore(): Account {
    let account = this.createMockAccount("urn:member:scott-hartman",
                                         "Scott",
                                         "Hartman",
                                         "Staff Software Engineer at Linkedin",
                                         "Passionate about promoting an open and decentralized economy in the modern era.",
                                         115,
                                         5250,
                                         "https://media.licdn.com/media/AAEAAQAAAAAAAAqtAAAAJDM4MTg0MmQwLTQ4ZTktNDQxZC1hNGI5LWIxOGVmODNiYzEzNw.jpg");
    
    account.experiences.push(this.createMockExperience("urn:company:linkedin",
                                                       "Staff Software Engineer",
                                                       "Technical lead on the Search and Indexing team, designing and developing infrastructure to scale search and social graph on LinkedIn. Also a leading member of LinkedIn Architecture Council.",
                                                       "Aug 2012",
                                                       "Present"));
    
    account.experiences.push(this.createMockExperience("urn:company:microsoft",
                                                       "Senior Software Engineer",
                                                       "Worked on some top-secret stuff I can't talk about here.",
                                                       "Jun 2008",
                                                       "Aug 2012"));
    
    account.experiences.push(this.createMockExperience("urn:company:microsoft",
                                                       "Software Engineer",
                                                       "Doing things and solving interesting problems for Bing Search.",
                                                       "Jun 2005",
                                                       "Aug 2008"));
    
    account.educations.push(this.createMockEducation("urn:school:stanford",
                                                     "Bachelor of Science, Computer Science",
                                                     null,
                                                     "2001",
                                                     "2005"));
    
    account.interests.push(this.createMockInterest("urn:interest:ethereum"));
    account.interests.push(this.createMockInterest("urn:interest:bitcoin"));
    account.interests.push(this.createMockInterest("urn:interest:ted-talk"));
    
    return account;
  }
  
  private createHwiYongSong(): Account {
    let account = this.createMockAccount("urn:member:hwi-yong-song",
                                         "Hwi Yong",
                                         "Song",
                                         "Technical Co-founder at PingMe",
                                         "Always imagining about how to enact social change, to bring about opportunity and fairness to the public interest.",
                                         215,
                                         9475,
                                         "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/3/000/1ad/294/2a81645.jpg");
    
    account.relationship = this.createMockRelationship("1st",
                                                       21,
                                                       "Linkedin",
                                                       "University of California, Berkeley");
    
    account.experiences.push(this.createMockExperience("urn:company:pingme",
                                                       "Technical Co-founder",
                                                       "Leading the technical and design effort to build a new decentralized attention market on the Ethereum blockchain.",
                                                       "Jul 2017",
                                                       "Present"));
    
    account.experiences.push(this.createMockExperience("urn:company:piicked",
                                                       "Technical Co-founder",
                                                       "Wearing many hats in designing and building a personalized food app, to help people find healthy food options for their unique dietary profile.",
                                                       "Apr 2015",
                                                       "Present"));
    
    account.experiences.push(this.createMockExperience("urn:company:linkedin",
                                                       "Staff Software Engineer",
                                                       "Team lead for Homepage and Network Updates team. Knowledgeable about all aspects of LinkedIn architecture and responsible for leading many projects/initiatives.",
                                                       "Apr 2010",
                                                       "Apr 2015"));
    
    account.experiences.push(this.createMockExperience("urn:company:demandtec",
                                                       "Lead Software Engineer",
                                                       "Lead developer in the Promotion team. Expert knowledge in system architecture, big data, prediction modeling, and database design/optimization.",
                                                       "Jun 2006",
                                                       "Apr 2010"));
    
    account.educations.push(this.createMockEducation("urn:school:berkeley",
                                                     "Bachelor of Science, Electrical Engineering & Computer Science",
                                                     "",
                                                     "2000",
                                                     "2004"));
    
    
    account.interests.push(this.createMockInterest("urn:interest:ethereum"));
    account.interests.push(this.createMockInterest("urn:interest:ted-talk"));
    account.interests.push(this.createMockInterest("urn:interest:game-of-thrones"));
    
    return account;
  }
  
  private createRobertConner(): Account {
    let account = this.createMockAccount("urn:member:robert-conner",
                                         "Robert",
                                         "Conner",
                                         "HR Manager at Uber",
                                         "Building the best teams to build the ultimate self-driving vehicles. Also crazy about robotics and ping pong.",
                                         232,
                                         8923,
                                         "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAMVAAAAJDhhNDJlOGY1LTg4NmQtNGFmOC1hMGI2LTRjY2ViMjNhNDZmNQ.jpg");
    
    account.relationship = this.createMockRelationship("2nd",
                                                       24,
                                                       "Linkedin",
                                                       "University of California, Berkeley");
    
    account.experiences.push(this.createMockExperience("urn:company:uber",
                                                       "Senior Technical Recruiter",
                                                       "Uber ATG is re-imagining the possibilities of transportation, starting with self driving cars + trucks. <br/><br/>We\'re looking for engineers who have proven experience shipping world changing products in backend infrastructure and applied Machine Learning. <br/><br/>Know someone who\'d be a fit? Shoot me a message.",
                                                       "Aug 2016",
                                                       "Present"));
  
    account.experiences.push(this.createMockExperience("urn:company:facebook",
                                                       "Technical Recruiter",
                                                       "Built teams for iOS and Android development at Facebook.",
                                                       "Apr 2014",
                                                       "Aug 2016"));
    
    account.experiences.push(this.createMockExperience("urn:company:linkedin",
                                                       "Recruiting Coordinator",
                                                       "Recruiting coordinator for the Engineering recruiting teams. Striving to create the best candidate experience in the world through masterful scheduling, attention to detail, and a splash of silliness and humor. My goal is to positively transform each candidate's prior perspectives and ideologies about Linkedin and securing a firm and room-echoing high five after!",
                                                       "2014",
                                                       "2014"));
    
    account.educations.push(this.createMockEducation("urn:school:berkeley",
                                                     "BA, Business Economic",
                                                     "Activities and Societies: Campus Tour Guide, Social Sciences Representative - Legislative Council, Activities Leader for UCI Extension program, Student Parent Orientation Staff Leader, Sigma Phi Epsilon (1 year)",
                                                     "2011",
                                                     "2014"));
    
    account.interests.push(this.createMockInterest("urn:interest:ethereum"));
    account.interests.push(this.createMockInterest("urn:interest:apple"));
    account.interests.push(this.createMockInterest("urn:interest:ted-talk"));
    
    return account;
  }
  
  private createLilyLapcokova(): Account {
    let account = this.createMockAccount("urn:member:lily-lapcokova",
                                         "Lily",
                                         "Lapcokova",
                                         "Technical Recruiting Lead at Facebook",
                                         "My passion lies in finding exceptional talent, building candidate and client relationships and thinking outside the box to solve challenges.",
                                         392,
                                         9820,
                                         "https://media.licdn.com/media/AAEAAQAAAAAAAAboAAAAJGEwMTFhYWU2LTRmODgtNDFlYi1iOGM0LTJhYjRjZjE3YjdlMQ.jpg");
    
    account.relationship = this.createMockRelationship("3rd",
                                                       11,
                                                       null,
                                                       "University of California, Berkeley");
    
    account.experiences.push(this.createMockExperience("urn:company:facebook",
                                                       "Technical Recruiting Lead",
                                                       "Recruiting Product and Systems Engineers who want to join us on our mission to give people the power to share and make the world more open and connected!<br/><br/>At Facebook, you have the opportunity to own products like Ads, Education, Messenger, Newsfeed, Search, Videos from end-to-end and constantly grow. You can build large distributed components that run Facebook, Your journey is never finished, and neither is the exciting work we do everyday.",
                                                       "Feb 2016",
                                                       "Present"));
    
    account.experiences.push(this.createMockExperience("urn:company:facebook",
                                                       "Technical Recruiter",
                                                       "Recruiting Product and Systems Engineers for the world's biggest social network.",
                                                       "Jan 2014",
                                                       "Feb 2016"));
    
    account.experiences.push(this.createMockExperience("urn:company:amazon",
                                                       "Technical Sourcing Recruiter",
                                                       "- Sourced the best and brightest Software Engineers, Software Managers, Technical Program Managers, Web Developers and Quality Assurance Engineers for Amazon Prime Hiring Events and Onsite Interviews.<br/><br/>- Partnered with hiring teams to build effective sourcing, assessment and closing strategies.<br/><br/>- Invented and simplified event recruiting while engaging strong analytical thinking to impact results.<br/><br/>- Maintained exceptional interview to offer ratio.<br/><br/>- Filled 30+ positions which accounted for approximately 25% of Amazon Prime new hires in 2013.",
                                                       "Jan 2013",
                                                       "Jan 2014"));
    account.experiences.push(this.createMockExperience("urn:company:microsoft",
                                                       "College Recruiter / Talent Sourcer (Volt)",
                                                       "- Conducted initial interviews of the very best computer science and engineering college students from the world\u2019s top universities.<br/><br/>- Provided a pool of candidates to hiring groups while employing strategic recommendations and expertise.<br/><br/>- Worked closely with school recruiters and managers to ensure proper routing of candidates and deliver best results.<br/><br/>- Maintained optimal interview to fly-back and interview to offer ratios.",
                                                       "Aug 2012",
                                                       "Jan 2013"));
    
    account.educations.push(this.createMockEducation("urn:school:stanford",
                                                     "Master of Business Administration (MBA), Marketing",
                                                     null,
                                                     "2011",
                                                     "2012"));
    
    account.educations.push(this.createMockEducation("urn:school:berkeley",
                                                     "Bachelor of Science, Business Administration",
                                                     null,
                                                     "2008",
                                                     "2011"));
    
    account.interests.push(this.createMockInterest("urn:interest:bitcoin"));
    account.interests.push(this.createMockInterest("urn:interest:ethereum"));
    account.interests.push(this.createMockInterest("urn:interest:game-of-thrones"));
    
    return account;
  }
  
  private createKimKamitani(): Account {
    let account = this.createMockAccount("urn:member:kim-kamitani",
                                         "Kim",
                                         "Kamitani",
                                         "Talent Recruiter at Airbnb",
                                         "A fun loving talent builder and food warrior in the Silicon Valley.",
                                         168,
                                         8122,
                                         "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/5/000/1c6/2ca/0ed27c5.jpg");
    
    account.relationship = this.createMockRelationship("2nd",
                                                       29,
                                                       null,
                                                       "University of California, Berkeley");
    
    account.experiences.push(this.createMockExperience("urn:company:airbnb",
                                                       "Technical Recruiter",
                                                       "We are growing our engineering team!",
                                                       "May 2015",
                                                       "Present"));
    
    account.experiences.push(this.createMockExperience("urn:company:facebook",
                                                       "Technical Sourcer- Product Engineering",
                                                       "Sourcing in support of product engineering pipelines.<br/><br/>Finding highly qualified, passive and active candidates using creative search techniques.<br/><br/>Partnering with recruiting team and hiring managers to achieve hiring goals.",
                                                       "May 2012",
                                                       "May 2015"));
    
    account.experiences.push(this.createMockExperience("urn:company:google",
                                                       "Engineering Recruiting",
                                                       "Coordinated all aspects of the interview process for software engineer candidates at Google, specializing in User Experience, Youtube, and Research Scientists<br/><br/>Participated in process related projects for recruiting coordinator team<br/><br/>Helped create and develop charity event called Compassion Thru Fashion, collecting donated clothes from Eng-Staffing team and donating to women\'s and men\'s shelters, also coordinated a department-wide sale at Google.",
                                                       "Nov 2009",
                                                       "May 2012"));
    
    account.educations.push(this.createMockEducation("urn:school:berkeley",
                                                     "Bachelor of Arts, Graphic Design",
                                                     null,
                                                     "2006",
                                                     "2009"));
    
    account.interests.push(this.createMockInterest("urn:interest:bitcoin"));
    account.interests.push(this.createMockInterest("urn:interest:ethereum"));
    account.interests.push(this.createMockInterest("urn:interest:apple"));
    account.interests.push(this.createMockInterest("urn:interest:game-of-thrones"));
    
    return account;
  }
  
  private createAkashGupta(): Account {
    let account = this.createMockAccount("urn:member:akash-gupta",
                                         "Akash",
                                         "Gupta",
                                         "Head of Global Vehicle Solutions Engineering at Uber",
                                         "I enjoy building awesome software and teams to build new products and technology that will make our lives easier and allow us to accomplish more than what we\'re able to do today. <br/><br/>I\'m excited about building highly scalable back-end systems that serve millions of users each day. Just the same, I\'m also excited about building mobile apps and front-end products that delight us each day.",
                                         295,
                                         4504,
                                         "https://media.licdn.com/media/p/6/005/06c/1ee/39b4187.jpg");
    
    account.relationship = this.createMockRelationship("1st",
                                                       49,
                                                       "Linkedin",
                                                       null);
    
    account.experiences.push(this.createMockExperience("urn:company:uber",
                                                       "Senior Engineering Manager",
                                                       "Leading Global Vehicle Solutions engineering organization whose mission is to provide the simplest way to get a vehicle for anyone who wants to make money around the world. We\'re solving problems like realtime tracking and managements of thousands of cars around the globe, to building seamless product experiences for people to get a car and for owners to manage their cars. <br/><br/>We\'re a collection of 8 teams, across SF, Seattle and Bangalore and we\'re definitely hiring :)! <br/><br/>Prior roles at Uber include: <br/><br/>* Engineering Lead for Driver Growth (May 2015 - Dec 2016): Lead a team of 100+ engineers to build features and infrastructure that help bring more people to Uber\'s platform to engagement and social features that create a better experience for our partners.<br/><br/>* Engineering Lead for Mobile Growth (Sept 2014 - May 2015): Grew the team from 3 to 40+ engineers focusing on growing Uber\'s core business, engagement and international expansion (India\/China) efforts.",
                                                       "Sep 2014",
                                                       "Present"));
    
    account.experiences.push(this.createMockExperience("urn:company:linkedin",
                                                       "Engineering Manager",
                                                       "Leading the teams in charge of building and scaling the various products under the Relationship and Network umbrella: <br/><br/>\u2022 Everything under Connections tab (desktop\/mobile-web)<br/><br/>\u2022 LinkedIn Connected iOS App <br/><br/>\u2022 Network updates<br/><br/>\u2022 Next generation infrastructure for anticipatory computing <br/><br/>\u2022 Third party Contacts\/Calendar\/Email sync infrastructure ",
                                                       "Dec 2011",
                                                       "Sep 2014"));
    
    account.educations.push(this.createMockEducation("urn:school:carnegie-mellon",
                                                     "Master of Science of Computer Science: Software Engineering",
                                                     "Graduated with honors.",
                                                     "2008",
                                                     "2011"));
    
    account.interests.push(this.createMockInterest("urn:interest:bitcoin"));
    account.interests.push(this.createMockInterest("urn:interest:ethereum"));
    account.interests.push(this.createMockInterest("urn:interest:apple"));
    
    return account;
  }
  
  private createFrankClemmens(): Account {
    let account = this.createMockAccount("urn:member:frank-clemmens",
                                         "Frank",
                                         "Clemmens",
                                         "Engineering and Product at Uber",
                                         "Currently leading UberEATS Eater engineering. Responsible for product and software engineering strategy across multiple teams, developing high performing leaders, and most importantly building a diverse and inclusive work culture.",
                                         128,
                                         4594,
                                         "https://media.licdn.com/media/AAEAAQAAAAAAAAsAAAAAJGFiOGM5NjZiLWI5NTktNDk1Mi1hNzI3LWYzMjA1MjQzMzZiZA.jpg");
    
    account.relationship = this.createMockRelationship("2nd",
                                                       33,
                                                       "Linkedin",
                                                       null);
    
    account.experiences.push(this.createMockExperience("urn:company:uber",
                                                       "Senior Engineering Manager",
                                                       "Currently leading UberEATS Eater engineering. This is our consumer experience group including the UberEATS app, ubereats.com, search and discovery, restaurant recommendations, ordering experience, delivery, customer service integration, consumer growth, and mobile infrastructure.<br/><br/>Before that, led Driver Acquisition engineering. We added flexible earning opportunities for millions of drivers across the globe through referrals, organic search optimization, web landing page optimization, marketing partnerships, and creative rider-facing products like Driver Profiles.<br/><br/>My teams prioritize great work culture, diversity and inclusion, putting employees first, and having fun.",
                                                       "Dec 2015",
                                                       "Present"));
    
    account.experiences.push(this.createMockExperience("urn:company:linkedin",
                                                       "Senior Engineering Manager",
                                                       "Leading the teams in charge of building and scaling the various products under the Relationship and Network umbrella: <br/><br/>\u2022 Everything under Connections tab (desktop\/mobile-web)<br/><br/>\u2022 LinkedIn Connected iOS App <br/><br/>\u2022 Network updates<br/><br/>\u2022 Next generation infrastructure for anticipatory computing <br/><br/>\u2022 Third party Contacts\/Calendar\/Email sync infrastructure ",
                                                       "Feb 2011",
                                                       "Dec 2015"));
    
    account.experiences.push(this.createMockExperience("urn:company:lockheed-martin",
                                                       "Senior Software Engineer",
                                                       "Led the 5-person engineering team in charge of the Distributed Fusion Manager (DFM) within Lockheed\'s Level 1 tracking and data fusion product.",
                                                       "Feb 2005",
                                                       "Dec 2011"));
    
    account.educations.push(this.createMockEducation("urn:school:carnegie-mellon",
                                                     "Master of Science of Computer Science: Software Engineering",
                                                     null,
                                                     "2001",
                                                     "2005"));
    
    account.interests.push(this.createMockInterest("urn:interest:android"));
    account.interests.push(this.createMockInterest("urn:interest:ethereum"));
    account.interests.push(this.createMockInterest("urn:interest:game-of-thrones"));
    account.interests.push(this.createMockInterest("urn:interest:blizzard"));
    
    return account;
  }
  
  private createMichaelSena(): Account {
    let account = this.createMockAccount("urn:member:michael-sena",
                                         "Michael",
                                         "Sena",
                                         "Product Lead at uPort",
                                         "Michael Sena manages product spokes and enterprise partnerships at Consensys. Michael brings a diverse background in product management, technology consulting, capital markets, and political economics to the blockchain. In previous roles, he designed and deployed consumer and enterprise technologies for some of the largest organizations in the world, managed a portfolio of international financial securities, and launched a startup. At Consensys, Michael is using these foundational experiences to unlock value on a global scale by building applications for the emerging blockchain economy. He believes that exponential blockchain adoption is only a beautiful Dapp away and is passionate about getting these products into the hands of people.<br/><br/>For business opportunities, please email michael.sena@consensys.net",
                                         187,
                                         4671,
                                         "https://media.licdn.com/media/AAEAAQAAAAAAAAh6AAAAJDhjNWIxNzhjLWU2NTgtNGIwNy1hNTExLWFiZWU1YWNlMDA5OA.jpg");
  
    account.experiences.push(this.createMockExperience("urn:company:uport",
                                                       "Product Lead",
                                                       "I wear many hats as a senior member of the uPort team. We're hiring! (Message me for details)",
                                                       "Jul 2016",
                                                       "Present"));
    
    account.experiences.push(this.createMockExperience("urn:company:consensys",
                                                       "Product Manager",
                                                       "Product manager for uPort, a self-sovereign digital identity platform built on Ethereum.",
                                                       "Jul 2016",
                                                       "Present"));
    
    account.experiences.push(this.createMockExperience("urn:company:airbnb",
                                                       "Product Manager",
                                                       null,
                                                       "Jul 2011",
                                                       "Jul 2016"));
    
    account.educations.push(this.createMockEducation("urn:school:princeton",
                                                     "B.A.: Political Economics",
                                                     "Studied how political game theory is shaped by popular mass media",
                                                     "2007",
                                                     "2011"));
    
    account.interests.push(this.createMockInterest("urn:interest:ethereum"));
    account.interests.push(this.createMockInterest("urn:interest:game-of-thrones"));
    
    return account;
  }
  
  private createRitaUrbach(): Account {
    let account = this.createMockAccount("urn:member:rita-urbach",
                                         "Rita",
                                         "Urbach",
                                         "Marketing Manager at Bancor",
                                         "I am a results driven - business oriented professional who is a fast learner and adopter of new technologies. I am motivated by strategic planning, creative execution and data-driven decisions.",
                                         316,
                                         8936,
                                         "https://media.licdn.com/media/p/3/005/04b/1af/2b7fe97.jpg");
    
    account.relationship = this.createMockRelationship("2nd",
                                                       119,
                                                       null,
                                                       null);
    
    account.experiences.push(this.createMockExperience("urn:company:bancor",
                                                       "Marketing Manager",
                                                       null,
                                                       "Sep 2017",
                                                       "Present"));
    
    account.experiences.push(this.createMockExperience("urn:company:facebook",
                                                       "Product Marketing",
                                                       "Produce marketing materials such as presentations, websites, landing pages, blog posts, product descriptions, video tutorials, training sessions, emails, ads & online campaigns.<br/><br/>Engage regularly and present to directors, teams, partners and customers.<br/><br/>Translate technical features into benefits that customers understand.<br/><br/>Managing the user funnel from user acquisition to retention, using marketing automation. <br/><br/>Manage outsourced service providers for development, design and SEO. <br/><br/>Coordinate and train resellers and affiliate partners. <br/><br/>Work closely with customers to refine positioning and messaging, and ensure they are used effectively.",
                                                       "Aug 2014",
                                                       "Sep 2017"));
    
    account.educations.push(this.createMockEducation("urn:school:carnegie-mellon",
                                                     "Bachelor of Arts: Business Management",
                                                     null,
                                                     "2011",
                                                     "2014"));

    account.interests.push(this.createMockInterest("urn:interest:ethereum"));
    account.interests.push(this.createMockInterest("urn:interest:bitcoin"));
    
    return account;
  }
  
  private createMockAccount(accountUrn: string,
                            firstName: string, 
                            lastName: string,
                            headline: string,
                            description: string,
                            connectionSize: number,
                            karmaSize: number,
                            profileImageUrl: string): Account {
    let account = new Account();
    
    account.urn = accountUrn;
    account.firstName = firstName;
    account.lastName = lastName;
    account.headline = headline;
    account.description = description;
    account.connectionSize = connectionSize;
    account.karmaSize = karmaSize;
    account.profileImage = new Image();
    account.profileImage.urn = "urn:image:" + StringUtils.generateUUID();
    account.profileImage.url = profileImageUrl;
    
    return account;
  }
  
  private createMockRelationship(graphDistance: string,
                                 sharedConnectionSize: number,
                                 sharedCompany: string,
                                 sharedSchool: string): Relationship {
    let relationship = new Relationship();
    
    relationship.graphDistance = graphDistance;
    relationship.sharedConnectionSize = sharedConnectionSize;
    relationship.sharedCompany = sharedCompany;
    relationship.sharedSchool = sharedSchool;
    
    return relationship;
  }
  
  private createMockExperience(companyUrn: string,
                               title: string,
                               description: string,
                               startDate: string,
                               endDate: string): Experience {
    let experience = new Experience();

    experience.urn = "urn:experience:" + StringUtils.generateUUID();
    experience.company = this.organizationProvider.getOrganizationByOrganizationUrn(companyUrn);
    experience.title = title;
    experience.description = description;
    experience.startDate = startDate;
    experience.endDate = endDate;
    
    return experience;
  }
  
  private createMockEducation(schoolUrn: string,
                              degree: string,
                              description: string,
                              startDate: string,
                              endDate: string): Education {
    let education = new Education();
    
    education.urn = "urn:education:" + StringUtils.generateUUID();
    education.school = this.organizationProvider.getOrganizationByOrganizationUrn(schoolUrn);
    education.degree = degree;
    education.description = description;
    education.startDate = startDate;
    education.endDate = endDate;
    
    return education;
  }
  
  private createMockInterest(interestUrn: string): Interest {
    return this.interestProvider.getInterestByInterestUrn(interestUrn);
  }
    
}