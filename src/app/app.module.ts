import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {AngularFireDatabaseModule } from 'angularfire2/database-deprecated'
import { FIREBASE_CONFIG } from './firebase.config';
import { AngularFireModule } from 'angularfire2';
import { AuthService } from '../providers/auth/auth.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { DataService } from '../providers/data/data.service';
import { FirebaseProvider } from './firebase.provider';
import { ChatService } from '../providers/chat/chat.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { PhotoViewer } from '@ionic-native/photo-viewer';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    DataService,
    FirebaseProvider,
    ChatService,
    ScreenOrientation,
    PhotoViewer
  ]
})
export class AppModule {}
