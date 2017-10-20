import { BrowserModule } from "@angular/platform-browser";
import { CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { AccountProvider } from "./providers/account.provider";
import { InboxProvider } from "./providers/inbox.provider";

import { MyApp } from "./app.component";
import { MessageFormPage } from "../pages/message-form/message-form.page";
import { MessageInboxPage } from "../pages/message-inbox/message-inbox.page";
import { MessageThreadPage } from "../pages/message-thread/message-thread.page";

let components: Array<any> = [
  MyApp,
  MessageFormPage,
  MessageInboxPage,
  MessageThreadPage
]

let directives: Array<any> = [

]

let pipes: Array<any> = [

]

let providers: Array<any> = [
  AccountProvider,
  InboxProvider,
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