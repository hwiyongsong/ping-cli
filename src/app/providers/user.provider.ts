import { Injectable } from "@angular/core";

import { InterestProvider } from "./interest.provider";
import { OrganizationProvider } from "./organization.provider";

import { Education } from "../domains/education";
import { Experience } from "../domains/experience";
import { Image } from "../domains/image";
import { Interest } from "../domains/interest";
import { Pricing } from "../domains/pricing";
import { Relationship } from "../domains/relationship";
import { Wallet } from "../domains/wallet";
import { User } from "../domains/user";

import { StringUtils } from "../utils/string-utils";

@Injectable()
export class UserProvider {
    
  public currentUser: User;
  private mockUsers: Array<User> = [];
  private mockAngelInvestors: Array<User> = [];
  private mockJobOpportunities: Array<User> = [];
  private mockBlockchainInfluencers: Array<User> = [];
  
  constructor(private interestProvider: InterestProvider,
              private organizationProvider: OrganizationProvider) { 
    this.initMockUsers();
    this.initCurrentUser();
    this.initAngelInvestors();
    this.initMockBlockchainInfluencers();
    this.initMockJobOpportunities();
  }
  
  getUserByUserUrn(userUrn: string): User {
    for (let user of this.mockUsers) {
      if (user.urn == userUrn) {
        return user;
      }
    }
    
    console.log("** Unable to find: " + userUrn);
    return null;
  }
  
  getUsers(): Array<User> {
    return this.mockUsers; 
  }
  
  getBlockchainInfluencers(): Array<User> {
    return this.mockBlockchainInfluencers;
  }
  
  private initCurrentUser() {
    this.currentUser = this.getUserByUserUrn("urn:member:scott-hartman");
  }
  
  private initMockUsers() {
    this.mockUsers.push(this.createScottPredmore()); // Staff Software Engineer at Linkedin
    this.mockUsers.push(this.createHwiYongSong()); // Technical Co-founder at PingMe
    this.mockUsers.push(this.createRobertConner()); // HR Manager at Uber
    this.mockUsers.push(this.createLilyLapcokova()); // Technical Recruiting Lead at Facebook
    this.mockUsers.push(this.createKimKamitani()); // Talent Recruiter at Airbnb
    this.mockUsers.push(this.createAkashGupta()); // Head of Global Vehicle Solutions Engineering at Uber
    this.mockUsers.push(this.createFrankClemmens()); // Engineering and Product at Uber
    this.mockUsers.push(this.createRitaUrbach()); // Marketing Manager at Bancor
    this.mockUsers.push(this.createMichaelSena()); // Product Lead at uPort
    this.mockUsers.push(this.createGlennWhitman()); // Venture Capitalist, Computer Scientist
    this.mockUsers.push(this.createZavainDar()); // VC at Lux Capital
    this.mockUsers.push(this.createBobBecker()); // Venture Capitalist at Venture Partners
    this.mockUsers.push(this.createTojiTokuda()); // President & CEO at Fusion Ventures
    this.mockUsers.push(this.createAnyaHayden()); // VC at Hightland Capital
    this.mockUsers.push(this.createReidHoffman()); // Entrepreneur. Product Strategist. Investor.
    this.mockUsers.push(this.createJosephLubin()); // Founder at Consensus Systems (ConsenSys)
    this.mockUsers.push(this.createGuyKawasaki()); // Chief evangelist + keynote speaker
    this.mockUsers.push(this.createJoelEnglander()); // Angel Investor
    this.mockUsers.push(this.createLilianaNordbakk()); // Angel Investor at Band of Angels
    this.mockUsers.push(this.creatJonBoutelle()); // Angel Investor and Entrepreneur at Independent
    this.mockUsers.push(this.creatRyanBethencourt()); // CEO, Investor and Blockchain Innovator
    this.mockUsers.push(this.creatConstanceChoi()); // Co-Founder & Director at COALA Foundation
    this.mockUsers.push(this.creatDilyaZhanispayeva()); // Co-Founder - Caspian Blockchain Technologies
    this.mockUsers.push(this.creatAndreDeCastro()); // CEO and Founder at Blockchain of Things
    this.mockUsers.push(this.creatKartikMandaville()); // CEO at SpringRole
    this.mockUsers.push(this.creatJosephQuan()); // Cofounder/CEO at Twinechain
  }
  
  private initAngelInvestors() {
    this.mockAngelInvestors.push(this.getUserByUserUrn("urn:member:joel-englander"));
    this.mockAngelInvestors.push(this.getUserByUserUrn("urn:member:liliana-nordbakk"));
    this.mockAngelInvestors.push(this.getUserByUserUrn("urn:member:ryan-bethencourt"));
    this.mockAngelInvestors.push(this.getUserByUserUrn("urn:member:jon-boutelle"));
  }
  
  private initMockJobOpportunities() {
    this.mockJobOpportunities.push(this.getUserByUserUrn("urn:member:robert-conner"));
    this.mockJobOpportunities.push(this.getUserByUserUrn("urn:member:frank-clemmens"));
    this.mockJobOpportunities.push(this.getUserByUserUrn("urn:member:lily-lapcokova"));
    this.mockJobOpportunities.push(this.getUserByUserUrn("urn:member:kim-kamitani"));
  }
  
  private initMockBlockchainInfluencers() {
    this.mockBlockchainInfluencers.push(this.getUserByUserUrn("urn:member:joseph-lubin"));
    this.mockBlockchainInfluencers.push(this.getUserByUserUrn("urn:member:reid-hoffman"));
    this.mockBlockchainInfluencers.push(this.getUserByUserUrn("urn:member:andre-de-castro"));
    this.mockBlockchainInfluencers.push(this.getUserByUserUrn("urn:member:constance-choi"));
    this.mockBlockchainInfluencers.push(this.getUserByUserUrn("urn:member:kartik-mandaville"));
  }
  
  private createScottPredmore(): User {
    let user = this.createMockUser("urn:member:scott-hartman",
                                   "Scott",
                                   "Hartman",
                                   "Staff Software Engineer at Linkedin",
                                   "Passionate about promoting an open and decentralized economy in the modern era.",
                                   115,
                                   5250,
                                   "https://media.licdn.com/media/AAEAAQAAAAAAAAqtAAAAJDM4MTg0MmQwLTQ4ZTktNDQxZC1hNGI5LWIxOGVmODNiYzEzNw.jpg");
    
    user.pricing = this.createMockPricing(10);
    
    user.wallet = this.createMockWallet("0x7cc8452255058b896991675112da7605dc1611d8", 
                                          365);
    
    user.experiences.push(this.createMockExperience("urn:company:linkedin",
                                                       "Staff Software Engineer",
                                                       "Technical lead on the Search and Indexing team, designing and developing infrastructure to scale search and social graph on LinkedIn. Also a leading user of LinkedIn Architecture Council.",
                                                       "Aug 2012",
                                                       "Present"));
    
    user.experiences.push(this.createMockExperience("urn:company:microsoft",
                                                       "Senior Software Engineer",
                                                       "Worked on some top-secret stuff I can't talk about here.",
                                                       "Jun 2008",
                                                       "Aug 2012"));
    
    user.experiences.push(this.createMockExperience("urn:company:microsoft",
                                                       "Software Engineer",
                                                       "Doing things and solving interesting problems for Bing Search.",
                                                       "Jun 2005",
                                                       "Aug 2008"));
    
    user.educations.push(this.createMockEducation("urn:school:stanford",
                                                     "Bachelor of Science, Computer Science",
                                                     null,
                                                     "2001",
                                                     "2005"));
    
    user.interests.push(this.createMockInterest("urn:interest:ethereum"));
    user.interests.push(this.createMockInterest("urn:interest:bitcoin"));
    user.interests.push(this.createMockInterest("urn:interest:ted-talk"));
    
    return user;
  }
  
  private createHwiYongSong(): User {
    let user = this.createMockUser("urn:member:hwi-yong-song",
                                   "Hwi Yong",
                                   "Song",
                                   "Technical Co-founder at PingMe",
                                   "Always imagining about how to enact social change, to bring about opportunity and fairness to the public interest.",
                                   215,
                                   9475,
                                   "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/3/000/1ad/294/2a81645.jpg");
    
    user.pricing = this.createMockPricing(10);
    
    user.relationship = this.createMockRelationship("1st",
                                                       21,
                                                       "Linkedin",
                                                       "University of California, Berkeley");
    
    user.experiences.push(this.createMockExperience("urn:company:pingme",
                                                       "Technical Co-founder",
                                                       "Leading the technical and design effort to build a new decentralized attention market on the Ethereum blockchain.",
                                                       "Jul 2017",
                                                       "Present"));
    
    user.experiences.push(this.createMockExperience("urn:company:piicked",
                                                       "Technical Co-founder",
                                                       "Wearing many hats in designing and building a personalized food app, to help people find healthy food options for their unique dietary profile.",
                                                       "Apr 2015",
                                                       "Present"));
    
    user.experiences.push(this.createMockExperience("urn:company:linkedin",
                                                       "Staff Software Engineer",
                                                       "Team lead for Homepage and Network Updates team. Knowledgeable about all aspects of LinkedIn architecture and responsible for leading many projects/initiatives.",
                                                       "Apr 2010",
                                                       "Apr 2015"));
    
    user.experiences.push(this.createMockExperience("urn:company:demandtec",
                                                       "Lead Software Engineer",
                                                       "Lead developer in the Promotion team. Expert knowledge in system architecture, big data, prediction modeling, and database design/optimization.",
                                                       "Jun 2006",
                                                       "Apr 2010"));
    
    user.educations.push(this.createMockEducation("urn:school:berkeley",
                                                     "Bachelor of Science, Electrical Engineering & Computer Science",
                                                     "",
                                                     "2000",
                                                     "2004"));
    
    
    user.interests.push(this.createMockInterest("urn:interest:ethereum"));
    user.interests.push(this.createMockInterest("urn:interest:ted-talk"));
    user.interests.push(this.createMockInterest("urn:interest:game-of-thrones"));
    
    return user;
  }
  
  private createRobertConner(): User {
    let user = this.createMockUser("urn:member:robert-conner",
                                   "Robert",
                                   "Conner",
                                   "HR Manager at Uber",
                                   "Building the best teams to build the ultimate self-driving vehicles. Also crazy about robotics and ping pong.",
                                   232,
                                   8923,
                                   "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAMVAAAAJDhhNDJlOGY1LTg4NmQtNGFmOC1hMGI2LTRjY2ViMjNhNDZmNQ.jpg");
  
    user.pricing = this.createMockPricing(10);
    
    user.relationship = this.createMockRelationship("2nd",
                                                       24,
                                                       "Linkedin",
                                                       "University of California, Berkeley");
    
    user.experiences.push(this.createMockExperience("urn:company:uber",
                                                       "Senior Technical Recruiter",
                                                       "Uber ATG is re-imagining the possibilities of transportation, starting with self driving cars + trucks. <br/><br/>We\'re looking for engineers who have proven experience shipping world changing products in backend infrastructure and applied Machine Learning. <br/><br/>Know someone who\'d be a fit? Shoot me a message.",
                                                       "Aug 2016",
                                                       "Present"));
  
    user.experiences.push(this.createMockExperience("urn:company:facebook",
                                                       "Technical Recruiter",
                                                       "Built teams for iOS and Android development at Facebook.",
                                                       "Apr 2014",
                                                       "Aug 2016"));
    
    user.experiences.push(this.createMockExperience("urn:company:linkedin",
                                                       "Recruiting Coordinator",
                                                       "Recruiting coordinator for the Engineering recruiting teams. Striving to create the best candidate experience in the world through masterful scheduling, attention to detail, and a splash of silliness and humor. My goal is to positively transform each candidate's prior perspectives and ideologies about Linkedin and securing a firm and room-echoing high five after!",
                                                       "2014",
                                                       "2014"));
    
    user.educations.push(this.createMockEducation("urn:school:berkeley",
                                                     "BA, Business Economic",
                                                     "Activities and Societies: Campus Tour Guide, Social Sciences Representative - Legislative Council, Activities Leader for UCI Extension program, Student Parent Orientation Staff Leader, Sigma Phi Epsilon (1 year)",
                                                     "2011",
                                                     "2014"));
    
    user.interests.push(this.createMockInterest("urn:interest:ethereum"));
    user.interests.push(this.createMockInterest("urn:interest:apple"));
    user.interests.push(this.createMockInterest("urn:interest:ted-talk"));
    
    return user;
  }
  
  private createLilyLapcokova(): User {
    let user = this.createMockUser("urn:member:lily-lapcokova",
                                   "Lily",
                                   "Lapcokova",
                                   "Technical Recruiting Lead at Facebook",
                                   "My passion lies in finding exceptional talent, building candidate and client relationships and thinking outside the box to solve challenges.",
                                   392,
                                   9820,
                                   "https://media.licdn.com/media/AAEAAQAAAAAAAAboAAAAJGEwMTFhYWU2LTRmODgtNDFlYi1iOGM0LTJhYjRjZjE3YjdlMQ.jpg");
  
    user.pricing = this.createMockPricing(10);
    
    user.relationship = this.createMockRelationship("3rd",
                                                       11,
                                                       null,
                                                       "University of California, Berkeley");
    
    user.experiences.push(this.createMockExperience("urn:company:facebook",
                                                       "Technical Recruiting Lead",
                                                       "Recruiting Product and Systems Engineers who want to join us on our mission to give people the power to share and make the world more open and connected!<br/><br/>At Facebook, you have the opportunity to own products like Ads, Education, Messenger, Newsfeed, Search, Videos from end-to-end and constantly grow. You can build large distributed components that run Facebook, Your journey is never finished, and neither is the exciting work we do everyday.",
                                                       "Feb 2016",
                                                       "Present"));
    
    user.experiences.push(this.createMockExperience("urn:company:facebook",
                                                       "Technical Recruiter",
                                                       "Recruiting Product and Systems Engineers for the world's biggest social network.",
                                                       "Jan 2014",
                                                       "Feb 2016"));
    
    user.experiences.push(this.createMockExperience("urn:company:amazon",
                                                       "Technical Sourcing Recruiter",
                                                       "- Sourced the best and brightest Software Engineers, Software Managers, Technical Program Managers, Web Developers and Quality Assurance Engineers for Amazon Prime Hiring Events and Onsite Interviews.<br/><br/>- Partnered with hiring teams to build effective sourcing, assessment and closing strategies.<br/><br/>- Invented and simplified event recruiting while engaging strong analytical thinking to impact results.<br/><br/>- Maintained exceptional interview to offer ratio.<br/><br/>- Filled 30+ positions which usered for approximately 25% of Amazon Prime new hires in 2013.",
                                                       "Jan 2013",
                                                       "Jan 2014"));
    user.experiences.push(this.createMockExperience("urn:company:microsoft",
                                                       "College Recruiter / Talent Sourcer (Volt)",
                                                       "- Conducted initial interviews of the very best computer science and engineering college students from the world\u2019s top universities.<br/><br/>- Provided a pool of candidates to hiring groups while employing strategic recommendations and expertise.<br/><br/>- Worked closely with school recruiters and managers to ensure proper routing of candidates and deliver best results.<br/><br/>- Maintained optimal interview to fly-back and interview to offer ratios.",
                                                       "Aug 2012",
                                                       "Jan 2013"));
    
    user.educations.push(this.createMockEducation("urn:school:stanford",
                                                     "Master of Business Administration (MBA), Marketing",
                                                     null,
                                                     "2011",
                                                     "2012"));
    
    user.educations.push(this.createMockEducation("urn:school:berkeley",
                                                     "Bachelor of Science, Business Administration",
                                                     null,
                                                     "2008",
                                                     "2011"));
    
    user.interests.push(this.createMockInterest("urn:interest:bitcoin"));
    user.interests.push(this.createMockInterest("urn:interest:ethereum"));
    user.interests.push(this.createMockInterest("urn:interest:game-of-thrones"));
    
    return user;
  }
  
  private createKimKamitani(): User {
    let user = this.createMockUser("urn:member:kim-kamitani",
                                   "Kim",
                                   "Kamitani",
                                   "Talent Recruiter at Airbnb",
                                   "A fun loving talent builder and food warrior in the Silicon Valley.",
                                   168,
                                   8122,
                                   "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/5/000/1c6/2ca/0ed27c5.jpg");
  
    user.pricing = this.createMockPricing(10);
    
    user.relationship = this.createMockRelationship("2nd",
                                                       29,
                                                       null,
                                                       "University of California, Berkeley");
    
    user.experiences.push(this.createMockExperience("urn:company:airbnb",
                                                       "Technical Recruiter",
                                                       "We are growing our engineering team!",
                                                       "May 2015",
                                                       "Present"));
    
    user.experiences.push(this.createMockExperience("urn:company:facebook",
                                                       "Technical Sourcer- Product Engineering",
                                                       "Sourcing in support of product engineering pipelines.<br/><br/>Finding highly qualified, passive and active candidates using creative search techniques.<br/><br/>Partnering with recruiting team and hiring managers to achieve hiring goals.",
                                                       "May 2012",
                                                       "May 2015"));
    
    user.experiences.push(this.createMockExperience("urn:company:google",
                                                       "Engineering Recruiting",
                                                       "Coordinated all aspects of the interview process for software engineer candidates at Google, specializing in User Experience, Youtube, and Research Scientists<br/><br/>Participated in process related projects for recruiting coordinator team<br/><br/>Helped create and develop charity event called Compassion Thru Fashion, collecting donated clothes from Eng-Staffing team and donating to women\'s and men\'s shelters, also coordinated a department-wide sale at Google.",
                                                       "Nov 2009",
                                                       "May 2012"));
    
    user.educations.push(this.createMockEducation("urn:school:berkeley",
                                                     "Bachelor of Arts, Graphic Design",
                                                     null,
                                                     "2006",
                                                     "2009"));
    
    user.interests.push(this.createMockInterest("urn:interest:bitcoin"));
    user.interests.push(this.createMockInterest("urn:interest:ethereum"));
    user.interests.push(this.createMockInterest("urn:interest:apple"));
    user.interests.push(this.createMockInterest("urn:interest:game-of-thrones"));
    
    return user;
  }
  
  private createAkashGupta(): User {
    let user = this.createMockUser("urn:member:akash-gupta",
                                   "Akash",
                                   "Gupta",
                                   "Head of Global Vehicle Solutions Engineering at Uber",
                                   "I enjoy building awesome software and teams to build new products and technology that will make our lives easier and allow us to accomplish more than what we\'re able to do today. <br/><br/>I\'m excited about building highly scalable back-end systems that serve millions of users each day. Just the same, I\'m also excited about building mobile apps and front-end products that delight us each day.",
                                   295,
                                   4504,
                                   "https://media.licdn.com/media/p/6/005/06c/1ee/39b4187.jpg");
  
    user.pricing = this.createMockPricing(10);
    
    user.relationship = this.createMockRelationship("1st",
                                                       49,
                                                       "Linkedin",
                                                       null);
    
    user.experiences.push(this.createMockExperience("urn:company:uber",
                                                       "Senior Engineering Manager",
                                                       "Leading Global Vehicle Solutions engineering organization whose mission is to provide the simplest way to get a vehicle for anyone who wants to make money around the world. We\'re solving problems like realtime tracking and managements of thousands of cars around the globe, to building seamless product experiences for people to get a car and for owners to manage their cars. <br/><br/>We\'re a collection of 8 teams, across SF, Seattle and Bangalore and we\'re definitely hiring :)! <br/><br/>Prior roles at Uber include: <br/><br/>* Engineering Lead for Driver Growth (May 2015 - Dec 2016): Lead a team of 100+ engineers to build features and infrastructure that help bring more people to Uber\'s platform to engagement and social features that create a better experience for our partners.<br/><br/>* Engineering Lead for Mobile Growth (Sept 2014 - May 2015): Grew the team from 3 to 40+ engineers focusing on growing Uber\'s core business, engagement and international expansion (India\/China) efforts.",
                                                       "Sep 2014",
                                                       "Present"));
    
    user.experiences.push(this.createMockExperience("urn:company:linkedin",
                                                       "Engineering Manager",
                                                       "Leading the teams in charge of building and scaling the various products under the Relationship and Network umbrella: <br/><br/>\u2022 Everything under Connections tab (desktop\/mobile-web)<br/><br/>\u2022 LinkedIn Connected iOS App <br/><br/>\u2022 Network updates<br/><br/>\u2022 Next generation infrastructure for anticipatory computing <br/><br/>\u2022 Third party Contacts\/Calendar\/Email sync infrastructure ",
                                                       "Dec 2011",
                                                       "Sep 2014"));
    
    user.educations.push(this.createMockEducation("urn:school:carnegie-mellon",
                                                     "Master of Science of Computer Science: Software Engineering",
                                                     "Graduated with honors.",
                                                     "2008",
                                                     "2011"));
    
    user.interests.push(this.createMockInterest("urn:interest:bitcoin"));
    user.interests.push(this.createMockInterest("urn:interest:ethereum"));
    user.interests.push(this.createMockInterest("urn:interest:apple"));
    
    return user;
  }
  
  private createFrankClemmens(): User {
    let user = this.createMockUser("urn:member:frank-clemmens",
                                   "Frank",
                                   "Clemmens",
                                   "Engineering and Product at Uber",
                                   "Currently leading UberEATS Eater engineering. Responsible for product and software engineering strategy across multiple teams, developing high performing leaders, and most importantly building a diverse and inclusive work culture.",
                                   128,
                                   4594,
                                   "https://media.licdn.com/media/AAEAAQAAAAAAAAsAAAAAJGFiOGM5NjZiLWI5NTktNDk1Mi1hNzI3LWYzMjA1MjQzMzZiZA.jpg");
  
    user.pricing = this.createMockPricing(10);
    
    user.relationship = this.createMockRelationship("2nd",
                                                    33,
                                                    "Linkedin",
                                                    null);
    
    user.experiences.push(this.createMockExperience("urn:company:uber",
                                                       "Senior Engineering Manager",
                                                       "Currently leading UberEATS Eater engineering. This is our consumer experience group including the UberEATS app, ubereats.com, search and discovery, restaurant recommendations, ordering experience, delivery, customer service integration, consumer growth, and mobile infrastructure.<br/><br/>Before that, led Driver Acquisition engineering. We added flexible earning opportunities for millions of drivers across the globe through referrals, organic search optimization, web landing page optimization, marketing partnerships, and creative rider-facing products like Driver Profiles.<br/><br/>My teams prioritize great work culture, diversity and inclusion, putting employees first, and having fun.",
                                                       "Dec 2015",
                                                       "Present"));
    
    user.experiences.push(this.createMockExperience("urn:company:linkedin",
                                                       "Senior Engineering Manager",
                                                       "Leading the teams in charge of building and scaling the various products under the Relationship and Network umbrella: <br/><br/>\u2022 Everything under Connections tab (desktop\/mobile-web)<br/><br/>\u2022 LinkedIn Connected iOS App <br/><br/>\u2022 Network updates<br/><br/>\u2022 Next generation infrastructure for anticipatory computing <br/><br/>\u2022 Third party Contacts\/Calendar\/Email sync infrastructure ",
                                                       "Feb 2011",
                                                       "Dec 2015"));
    
    user.experiences.push(this.createMockExperience("urn:company:lockheed-martin",
                                                       "Senior Software Engineer",
                                                       "Led the 5-person engineering team in charge of the Distributed Fusion Manager (DFM) within Lockheed\'s Level 1 tracking and data fusion product.",
                                                       "Feb 2005",
                                                       "Dec 2011"));
    
    user.educations.push(this.createMockEducation("urn:school:carnegie-mellon",
                                                     "Master of Science of Computer Science: Software Engineering",
                                                     null,
                                                     "2001",
                                                     "2005"));
    
    user.interests.push(this.createMockInterest("urn:interest:android"));
    user.interests.push(this.createMockInterest("urn:interest:ethereum"));
    user.interests.push(this.createMockInterest("urn:interest:game-of-thrones"));
    user.interests.push(this.createMockInterest("urn:interest:blizzard"));
    
    return user;
  }
  
  private createMichaelSena(): User {
    let user = this.createMockUser("urn:member:michael-sena",
                                   "Michael",
                                   "Sena",
                                   "Product Lead at uPort",
                                   "Michael Sena manages product spokes and enterprise partnerships at Consensys. Michael brings a diverse background in product management, technology consulting, capital markets, and political economics to the blockchain.",
                                   187,
                                   4671,
                                   "https://media.licdn.com/media/AAEAAQAAAAAAAAh6AAAAJDhjNWIxNzhjLWU2NTgtNGIwNy1hNTExLWFiZWU1YWNlMDA5OA.jpg");

    user.pricing = this.createMockPricing(10);
    
    user.relationship = this.createMockRelationship("2nd",
                                                    11,
                                                    null,
                                                    null);
    
    user.experiences.push(this.createMockExperience("urn:company:uport",
                                                       "Product Lead",
                                                       "I wear many hats as a senior user of the uPort team. We're hiring! (Message me for details)",
                                                       "Jul 2016",
                                                       "Present"));
    
    user.experiences.push(this.createMockExperience("urn:company:consensys",
                                                       "Product Manager",
                                                       "Product manager for uPort, a self-sovereign digital identity platform built on Ethereum.",
                                                       "Jul 2016",
                                                       "Present"));
    
    user.experiences.push(this.createMockExperience("urn:company:airbnb",
                                                       "Product Manager",
                                                       null,
                                                       "Jul 2011",
                                                       "Jul 2016"));
    
    user.educations.push(this.createMockEducation("urn:school:princeton",
                                                     "B.A.: Political Economics",
                                                     "Studied how political game theory is shaped by popular mass media",
                                                     "2007",
                                                     "2011"));
    
    user.interests.push(this.createMockInterest("urn:interest:ethereum"));
    user.interests.push(this.createMockInterest("urn:interest:game-of-thrones"));
    
    return user;
  }
  
  private createRitaUrbach(): User {
    let user = this.createMockUser("urn:member:rita-urbach",
                                   "Rita",
                                   "Urbach",
                                   "Marketing Manager at Bancor",
                                   "I am a results driven - business oriented professional who is a fast learner and adopter of new technologies. I am motivated by strategic planning, creative execution and data-driven decisions.",
                                   316,
                                   8936,
                                   "https://media.licdn.com/media/p/3/005/04b/1af/2b7fe97.jpg");
  
    user.pricing = this.createMockPricing(10);
    
    user.relationship = this.createMockRelationship("2nd",
                                                       19,
                                                       null,
                                                       null);
    
    user.experiences.push(this.createMockExperience("urn:company:bancor",
                                                       "Marketing Manager",
                                                       null,
                                                       "Sep 2017",
                                                       "Present"));
    
    user.experiences.push(this.createMockExperience("urn:company:facebook",
                                                       "Product Marketing",
                                                       "Produce marketing materials such as presentations, websites, landing pages, blog posts, product descriptions, video tutorials, training sessions, emails, ads & online campaigns.<br/><br/>Engage regularly and present to directors, teams, partners and customers.<br/><br/>Translate technical features into benefits that customers understand.<br/><br/>Managing the user funnel from user acquisition to retention, using marketing automation. <br/><br/>Manage outsourced service providers for development, design and SEO. <br/><br/>Coordinate and train resellers and affiliate partners. <br/><br/>Work closely with customers to refine positioning and messaging, and ensure they are used effectively.",
                                                       "Aug 2014",
                                                       "Sep 2017"));
    
    user.educations.push(this.createMockEducation("urn:school:carnegie-mellon",
                                                     "Bachelor of Arts: Business Management",
                                                     null,
                                                     "2011",
                                                     "2014"));

    user.interests.push(this.createMockInterest("urn:interest:ethereum"));
    user.interests.push(this.createMockInterest("urn:interest:bitcoin"));
    
    return user;
  }
  
  private createGlennWhitman(): User {
    let user = this.createMockUser("urn:member:glenn-whitman",
                                   "Glenn",
                                   "Whitman",
                                   "Venture Capitalist, Computer Scientist",
                                   "",
                                   598,
                                   12295,
                                   "https://media.licdn.com/media/AAEAAQAAAAAAAATUAAAAJDc5MTIxM2M0LTZiYjEtNGU5MC1hYmRhLTExNWZjYzY2ZWE2MA.jpg");
  
    user.pricing = this.createMockPricing(100);
    
    user.relationship = this.createMockRelationship("3rd",
                                                       12,
                                                       null,
                                                       null);
    
    return user;
  }
  
  private createZavainDar(): User {
    let user = this.createMockUser("urn:member:zavain-dar",
                                   "Zavain",
                                   "Dar",
                                   "VC at Lux Capital",
                                   "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> </p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
                                   322,
                                   9634,
                                   "https://media.licdn.com/media/p/5/005/014/3b1/151eb1e.jpg");
  
    user.pricing = this.createMockPricing(100);
    
    user.relationship = this.createMockRelationship("3rd",
                                                       10,
                                                       null,
                                                       null);
    
    return user;
  }
  
  private createBobBecker(): User {
    let user = this.createMockUser("urn:member:bob-becker",
                                   "Bob",
                                   "Becker",
                                   "Venture Capitalist at Venture Partners",
                                   "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> </p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
                                   487,
                                   10349,
                                   "https://media.licdn.com/media/p/1/000/18f/1bf/36ce353.jpg");
  
    user.pricing = this.createMockPricing(100);
    
    user.relationship = this.createMockRelationship("2nd",
                                                       22,
                                                       null,
                                                       null);
    
    return user;
  }
  
  private createTojiTokuda(): User {
    let user = this.createMockUser("urn:member:koji-tokuda",
                                   "Toji",
                                   "Tokuda",
                                   "President & CEO at Fusion Ventures",
                                   "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> </p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
                                   424,
                                   9274,
                                   "https://media.licdn.com/media/p/1/000/277/3e7/34f7823.jpg");
  
    user.pricing = this.createMockPricing(100);
    
    user.relationship = this.createMockRelationship("3rd",
                                                       13,
                                                       null,
                                                       null);
    
    return user;
  }
  
  private createAnyaHayden(): User {
    let user = this.createMockUser("urn:member:anya-hayden",
                                   "Anya",
                                   "Hayden",
                                   "VC at Hightland Capital",
                                   "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> </p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
                                   326,
                                   8642,
                                   "https://media.licdn.com/media/AAEAAQAAAAAAAAhGAAAAJDQxYjlhMWQ3LTBjZjItNDkwNS1hMWJlLTJhYjAwZTZjMzAwNA.jpg");
  
    user.pricing = this.createMockPricing(100);
    
    user.relationship = this.createMockRelationship("2nd",
                                                       32,
                                                       null,
                                                       null);
    
    return user;
  }
  
  private createReidHoffman(): User {
    let user = this.createMockUser("urn:member:reid-hoffman",
                                   "Reid",
                                   "Hoffman",
                                   "Entrepreneur. Product Strategist. Investor.",
                                   "<p>All aspects of consumer internet and software. Focus is on product development, innovation, business strategy, and finance, but includes general management, operations, business operations, business development, talent management, and marketing.</p> </p>Strong experience in both seed-stage companies (paypal, linkedin, facebook, zynga, last.fm, flickr) and growth companies (mozilla, linkedin, zynga, paypal.)</p>",
                                   495,
                                   11942,
                                   "https://media.licdn.com/media/p/5/000/1bd/26f/349c10e.jpg");
  
    user.pricing = this.createMockPricing(250);
    
    user.relationship = this.createMockRelationship("2nd",
                                                       24,
                                                       null,
                                                       null);
    
    return user;
  }
  
  private createJosephLubin(): User {
    let user = this.createMockUser("urn:member:joseph-lubin",
                                   "Joseph",
                                   "Lubin",
                                   "Founder at Consensus Systems (ConsenSys)",
                                   "<p>Joseph Lubin’s career has involved various posts in the fields of technology and finance and in their intersection.</p> <p>Subsequent to graduating cum laude with a degree in Electrical Engineering and Computer Science from Princeton, he worked as research staff in the Robotics Lab at Princeton and then at Vision Applications, Inc., a private research firm, in the fields of autonomous mobile robotics, machine vision and artificial neural networks.</p> <p>His next project was the development of an autonomous music composition tool with tomandandy music.</p> <p>Joseph worked as a software engineer and consultant on various projects, eventually being tipped for the role of Director of the New York office of Blacksmith, a Virginia-based software consulting firm.</p> <p>Software engineering, finance and cryptography were central during employment with Goldman Sachs, eMagine’s consulting work on the Identrus project, and the founding and operation of a set of hedge funds run with a partner.</p> <p>Switching gears, Joseph moved to Kingston, Jamaica to work on a set of projects in the music industry. Two years into the music project, Joseph co-founded the Ethereum Project, and has been working on Ethereum and more recently ConsenSys since January 2014.</p> <p>ConsenSys began as a blockchain production studio building decentralized applications, mostly on Ethereum, and continues on this track, but has expanded its activities since inception. Many of those components are core elements that can be used to construct larger solutions as well as being standalone solutions in their own right. Since ConsenSys began operations before the Ethereum ecosystem existed, ConsenSys has also built core infrastructure elements like Ethereum clients, testing frameworks, rapid application development frameworks, and Integrated Development Environments. ConsenSys Enterprise, the professional services arm, works with various enterprises to help them formulate their blockchain strategy and develop business processes for them on private or consortium blockchains, as well as on the public Ethereum network.</p>",
                                   472,
                                   12255,
                                   "https://media.licdn.com/media/AAEAAQAAAAAAAAvtAAAAJDcwMzk5ZmE3LWViZGQtNGQzMS04ZGUxLTU4MzI0NjY0NzczMQ.jpg");
  
    user.pricing = this.createMockPricing(250);
    
    user.relationship = this.createMockRelationship("2nd",
                                                       24,
                                                       null,
                                                       null);
    
    return user;
  }
  
  private createGuyKawasaki(): User {
    let user = this.createMockUser("urn:member:guy-kawasaki",
                                   "Guy",
                                   "Kawasaki",
                                   "Chief Evangelist & Keynote Speaker",
                                   "<p>Guy possesses an extensive knowledge of innovation, entrepreneurship, social media, and marketing. First and foremost, he is an evangelist. The term comes from a Greek word that means \"bringing the good news.\"</p><p>That's what he does--whether it was the good news of Macintosh or currently the good news of Canva, an online graphics-design firm. He aligns with companies and causes that empower people, foster democracy, and make the world a meritocracy.</p><p>In addition to his work at Canva, he is a writer (thirteen books), speaker, Mercedes brand ambassador, and executive fellow at the Haas School of Business at UC Berkeley.</p> ",
                                   436,
                                   11934,
                                   "https://media.licdn.com/media/AAEAAQAAAAAAAAf_AAAAJDVjZjAzNzQxLWViMDktNGQ4My05MzA2LTg0NDc1NDk0MDA4Nw.jpg");
    
    user.pricing = this.createMockPricing(250);
    
    user.relationship = this.createMockRelationship("2nd",
                                                     16,
                                                     null,
                                                     null);
    
    return user;
  }
  
  private createJoelEnglander(): User {
    let user = this.createMockUser("urn:member:joel-englander",
                                   "Joel",
                                   "Englander",
                                   "Angel Investor at Blumberg Capital",
                                   "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> </p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
                                   387,
                                   9232,
                                   "https://media.licdn.com/media/p/2/000/0a4/11d/382a61f.jpg");
  
    user.pricing = this.createMockPricing(50);
    
    user.relationship = this.createMockRelationship("2nd",
                                                       14,
                                                       null,
                                                       null);
    
    return user;
  }
  
  private createLilianaNordbakk(): User {
    let user = this.createMockUser("urn:member:liliana-nordbakk",
                                   "Liliana",
                                   "Nordbakk",
                                   "Angel Investor at Band of Angels",
                                   "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> </p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
                                   328,
                                   7345,
                                   "https://media.licdn.com/media/p/3/005/00b/3ec/2dd1c23.jpg");
  
    user.pricing = this.createMockPricing(50);
    
    user.relationship = this.createMockRelationship("3rd",
                                                       7,
                                                       null,
                                                       null);
    
    return user;
  }
  
  private creatJonBoutelle(): User {
    let user = this.createMockUser("urn:member:jon-boutelle",
                                   "Jon",
                                   "Boutelle",
                                   "Angel Investor at Independent",
                                   "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> </p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
                                   483,
                                   8313,
                                   "https://media.licdn.com/media/p/7/005/0a2/177/061ff31.jpg");
  
    user.pricing = this.createMockPricing(50);
    
    user.relationship = this.createMockRelationship("2nd",
                                                       17,
                                                       null,
                                                       null);
    
    return user;
  }
  
  private creatRyanBethencourt(): User {
    let user = this.createMockUser("urn:member:ryan-bethencourt",
                                   "Ryan",
                                   "Bethencourt",
                                   "CEO, Investor and Blockchain Innovator",
                                   "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> </p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
                                   238,
                                   5342,
                                   "https://media.licdn.com/media/AAEAAQAAAAAAAAdiAAAAJDkxNjg0Y2NkLTAzYjYtNDNmMC04ZTVmLWIxZTBhMTA3OTU0Yw.jpg");
  
    user.pricing = this.createMockPricing(50);
    
    user.relationship = this.createMockRelationship("2nd",
                                                       23,
                                                       null,
                                                       null);
    
    return user;
  }
  
  private creatConstanceChoi(): User {
    let user = this.createMockUser("urn:member:constance-choi",
                                   "Constance",
                                   "Choi",
                                   "Co-Founder & Director at COALA Foundation",
                                   "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> </p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
                                   321,
                                   8923,
                                   "https://media.licdn.com/media/AAEAAQAAAAAAAAe5AAAAJDhlNjc0ZDk5LWZmYzMtNDFhNy04ZDY4LWViZDdhYjg3MTdmZA.jpg");
  
    user.pricing = this.createMockPricing(40);
    
    user.relationship = this.createMockRelationship("3rd",
                                                       8,
                                                       null,
                                                       null);
    
    return user;
  }
  
  private creatDilyaZhanispayeva(): User {
    let user = this.createMockUser("urn:member:dilya-zhanispayeva",
                                   "Dilya",
                                   "Zhanispayeva",
                                   "Co-Founder - Caspian Blockchain Technologies",
                                   "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> </p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
                                   246,
                                   6741,
                                   "https://media.licdn.com/media/AAIA_wDGAAAAAQAAAAAAAA0SAAAAJDI1OTlhYTEyLWUzMTUtNGFhYy1iMmM4LTc2MjU2YjI1MTRmNQ.jpg");
  
    user.pricing = this.createMockPricing(40);
    
    user.relationship = this.createMockRelationship("3rd",
                                                       5,
                                                       null,
                                                       null);
    
    return user;
  }
  
  private creatAndreDeCastro(): User {
    let user = this.createMockUser("urn:member:andre-de-castro",
                                   "Andre",
                                   "de Castro",
                                   "CEO and Founder at Blockchain of Things",
                                   "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> </p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
                                   231,
                                   6382,
                                   "https://media.licdn.com/media/AAEAAQAAAAAAAAftAAAAJDViZDlmODQyLTE2YTUtNDU3Yy1hZWQ5LWM2ZWVlZDliYTEzMw.jpg");
  
    user.pricing = this.createMockPricing(40);
    
    user.relationship = this.createMockRelationship("2nd",
                                                       11,
                                                       null,
                                                       null);
    
    return user;
  }
  
  private creatKartikMandaville(): User {
    let user = this.createMockUser("urn:member:kartik-mandaville",
                                   "Kartik",
                                   "Mandaville",
                                   "CEO at SpringRole, Advisor at Science Blockchain",
                                   "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> </p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
                                   188,
                                   5728,
                                   "https://media.licdn.com/media/AAEAAQAAAAAAAANzAAAAJGI1NTJkZWU4LWI1NGItNDQ4MC05NzA0LWE5Njk2MWJmYWMyYQ.jpg");
  
    user.pricing = this.createMockPricing(10);
    
    user.relationship = this.createMockRelationship("2nd",
                                                       19,
                                                       null,
                                                       null);
    
    return user;
  }
  
  private creatJosephQuan(): User {
    let user = this.createMockUser("urn:member:joseph-quan",
                                   "Joseph",
                                   "Quan",
                                   "Cofounder/CEO at Twinechain",
                                   "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> </p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
                                   194,
                                   7238,
                                   "https://media.licdn.com/media/AAEAAQAAAAAAAAfKAAAAJGFmMTZkNWE5LTc1YjUtNDk0MC1hMDkzLTk1ZGQ2MWI1MWY2Mw.jpg");
  
    user.pricing = this.createMockPricing(20);
    
    user.relationship = this.createMockRelationship("2nd",
                                                       19,
                                                       null,
                                                       null);
    
    return user;
  }
  
  private createMockUser(userUrn: string,
                            firstName: string, 
                            lastName: string,
                            headline: string,
                            description: string,
                            connectionSize: number,
                            karmaSize: number,
                            profileImageUrl: string): User {
    let user = new User();
    
    user.urn = userUrn;
    user.firstName = firstName;
    user.lastName = lastName;
    user.headline = headline;
    user.description = description;
    user.connectionSize = connectionSize;
    user.karmaSize = karmaSize;
    user.profileImage = new Image();
    user.profileImage.urn = "urn:image:" + StringUtils.generateUUID();
    user.profileImage.url = profileImageUrl;
    
    return user;
  }
  
  private createMockPricing(messagePrice: number): Pricing {
    let pricing = new Pricing();
    
    pricing.messagePrice = messagePrice;
    
    return pricing;
  }
  
  private createMockWallet(address: string,
                           balance: number): Wallet {
    let wallet = new Wallet();
    
    wallet.address = address;
    wallet.balance = balance;
    
    return wallet;
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