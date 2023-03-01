import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DataListComponent } from './ContactComponents/data-list/data-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { SubscribersDataComponent } from './ContactComponents/subscribers-data/subscribers-data.component';
import { DataNavbarComponent } from './ContactComponents/data-navbar/data-navbar.component';
import { NgToastModule } from "ng-angular-popup";




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillsComponent,
    AboutComponent,
    ContactComponent,
    DataListComponent,
    NewsletterComponent,
    SubscribersDataComponent,
    DataNavbarComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgToastModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
