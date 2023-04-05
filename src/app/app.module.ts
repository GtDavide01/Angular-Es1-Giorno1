import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './componenti/about/about.component';
import { ContactComponent } from './componenti/contact/contact.component';
import { HomeComponent } from './componenti/home/home.component';
import { HeaderComponent } from './componenti/header/header.component';
import { MainComponent } from './componenti/main/main.component';

// AngularMaterial
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    HeaderComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatButtonModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
