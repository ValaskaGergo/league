import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LeagueComponent } from './league/league.component';



@NgModule({
  declarations: [
    AppComponent,
    LeagueComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
