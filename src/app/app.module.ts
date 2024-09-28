import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { FirstComponent } from './sections/first/first.component';
import { NavbarIconComponent } from './customs/navbar-icon/navbar-icon.component';
import { SecondComponent } from './sections/second/second.component';
import { MainComponent } from './sections/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    FirstComponent,
    NavbarIconComponent,
    SecondComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
