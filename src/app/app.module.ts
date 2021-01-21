import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './public/components/header/header.component';
import { AboutComponent } from './public/components/about/about.component';
import { LoginComponent } from './public/components/login/login.component';
import { RegisterComponent } from './public/components/register/register.component';
import { HomeComponent } from './public/components/home/home.component';
import { NotFoundComponent } from './public/components/not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, AboutComponent, LoginComponent, RegisterComponent, HomeComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
