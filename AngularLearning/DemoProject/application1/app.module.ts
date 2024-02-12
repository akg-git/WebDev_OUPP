import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { UserLoginComponentComponent } from './user-module1/user-login-component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    UserLoginComponentComponent //adding component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
