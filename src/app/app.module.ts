import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializer } from './app-initilizer';
import { CoreModule } from './core/core.module';
import { AppService } from './app.service';
import { AppGlobals } from './app.globals';
import { EventStackService } from './core/services/event-stack.service';
//import { SendConfirmPage } from './pages/send-confirm/send-confirm.page';
import { SendConfirmPageModule } from './pages/send-confirm/send-confirm.module';


@NgModule({
  declarations: [
  AppComponent,
  //SendConfirmPage
  ],
  entryComponents: [
    //SendConfirmPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot({ mode: 'ios' }),
    AppRoutingModule,
    SendConfirmPageModule,
    KeycloakAngularModule,
    CoreModule,
    BrowserAnimationsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    AppGlobals,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService, EventStackService, AppService]
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
