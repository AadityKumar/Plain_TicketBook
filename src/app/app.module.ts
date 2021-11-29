import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AirindiaComponent } from './airindia/airindia.component';
import { UserinfoComponent } from './pages/userinfo/userinfo.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IndigoComponent } from './indigo/indigo.component';
import { AirasiaComponent } from './airasia/airasia.component';
import { GoairComponent } from './goair/goair.component';


@NgModule({
  declarations: [
    AppComponent,
    AirindiaComponent,
    UserinfoComponent,
    LoginComponent,
    RegisterComponent,
    IndigoComponent,
    AirasiaComponent,
    GoairComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
