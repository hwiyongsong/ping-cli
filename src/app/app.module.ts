import { BrowserModule } from "@angular/platform-browser";
import { CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { Keyboard } from "@ionic-native/keyboard";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { CommunityProvider } from "./providers/community.provider";
import { CurrencyProvider } from "./providers/currency.provider";
import { ExperimentProvider } from "./providers/experiment.provider";
import { InterestProvider } from "./providers/interest.provider";
import { ListProvider } from "./providers/list.provider";
import { MessageProvider } from "./providers/message.provider";
import { PageProvider } from "./providers/page.provider";
import { OrganizationProvider } from "./providers/organization.provider";
import { PostProvider } from "./providers/post.provider";
import { TransactionProvider } from "./providers/transaction.provider";
import { UserProvider } from "./providers/user.provider";

import { MyApp } from "./app.component";
import { MainPage } from "../pages/main.page";
import { ConfigurationPage } from "../pages/configuration/configuration.page";
import { ExplorePage } from "../pages/explore/explore.page";
import { ListDetailPage } from "../pages/list-detail/list-detail.page";
import { MessageBoxPage } from "../pages/message-box/message-box.page";
import { MessageConversationPage } from "../pages/message-conversation/message-conversation.page";
import { MyAccountPage } from "../pages/my-account/my-account.page";
import { OrganizationProfilePage } from "../pages/organization-profile/organization-profile.page";
import { PostDetailPage } from "../pages/post-detail/post-detail.page";
import { UserProfilePage } from "../pages/user-profile/user-profile.page";
import { WalletPage } from "../pages/wallet/wallet.page";

import { AbookBlock } from "../blocks/abook/abook.block";
import { ChromeBlock } from "../blocks/chrome/chrome.block";
import { ContentBlock } from "../blocks/content/content.block";
import { ExpandableHeaderBlock } from "../blocks/expandable-header/expandable-header.block";
import { FeedBlock } from "../blocks/feed/feed.block";
import { ListBlock } from "../blocks/list/list.block";
import { PostBlock } from "../blocks/post/post.block";
import { SlidesBlock } from "../blocks/slides/slides.block";
import { UserBlock } from "../blocks/user/user.block";

import { AutoFocusDirective } from "./directives/autofocus.directive";
import { ElasticHeaderDirective } from "./directives/elastic-header.directive";
import { KeyboardAttachDirective } from "./directives/keyboard-attach.directive";
import { TextareaAutosizeDirective } from "./directives/textarea-autosize.directive";

import { SafeUrlPipe } from "./pipes/safeurl.pipe";

let components: Array<any> = [
  MyApp,
  
  MainPage,
  ConfigurationPage,
  ExplorePage,
  ListDetailPage,
  MessageBoxPage,
  MessageConversationPage,
  MyAccountPage,
  OrganizationProfilePage,
  PostDetailPage,
  UserProfilePage,
  WalletPage,
  
  AbookBlock,
  ChromeBlock,
  ContentBlock,
  ExpandableHeaderBlock,
  FeedBlock,
  ListBlock,
  PostBlock,
  SlidesBlock,
  UserBlock
]

let directives: Array<any> = [
  AutoFocusDirective,
  ElasticHeaderDirective,
  KeyboardAttachDirective,
  TextareaAutosizeDirective
]

let pipes: Array<any> = [
  SafeUrlPipe
]

let providers: Array<any> = [
  CommunityProvider,
  CurrencyProvider,
  ExperimentProvider,
  InterestProvider,
  ListProvider,
  MessageProvider,
  UserProvider,
  OrganizationProvider,
  PageProvider,
  PostProvider,
  TransactionProvider,
  Keyboard,
  StatusBar,
  SplashScreen,
  { provide: ErrorHandler, useClass: IonicErrorHandler }
]

@NgModule({
  declarations: [...components, ...directives, ...pipes],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      autoFocusAssist: false,
      backButtonText: "",
      loadingEnter: "loading-md-pop-in",
      loadingLeave: "loading-md-pop-out",
      modalEnter: "modal-md-slide-in",
      modalLeave: "modal-md-slide-out",
      mode: "ios",
      pageTransition: "md-transition",
      scrollAssist: false,
      spinner: "dots",
      statusbarPadding: false,
      tabsHideOnSubPages: true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: components,
  providers: providers,
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class AppModule { }