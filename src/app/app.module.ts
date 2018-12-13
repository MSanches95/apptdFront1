import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpModule } from '@angular/http'; // Muy importante
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UploadPage } from '../pages/upload/upload';
import { AuthProvider } from '../providers/auth/auth';
import { TodosProvider } from '../providers/todos/todos';

//import { NgModule } from '@angular/core';
//import { IonicApp, IonicModule } from 'ionic-angular';
//import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
//import { Storage } from '@ionic/storage';
//import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
//import { Todos } from '../providers/todos';
//import { Auth } from '../providers/auth';


// @NgModule({
//   declarations: [
//     MyApp,
//     HomePage
//   ],
//   imports: [
//     BrowserModule,
//     IonicModule.forRoot(MyApp)
//   ],
//   bootstrap: [IonicApp],
//   entryComponents: [
//     MyApp,
//     HomePage
//   ],
//   providers: [
//     StatusBar,
//     SplashScreen,
//     {provide: ErrorHandler, useClass: IonicErrorHandler},
//     AuthProvider,
//     TodosProvider
//   ]
// })
// export class AppModule {}



 
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    UploadPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    UploadPage
  ],
  providers: [StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    TodosProvider]
})
export class AppModule {}


// export function provideStorage() {
//   return new Storage();
//   // return new Storage(['sqlite', 'websql', 'indexeddb'], { name: '__mydb' } /* optional config */);
// }

//       { provide: Storage, useFactory: provideStorage },
