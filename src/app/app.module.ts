import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Afficheur8Component } from './afficheur8/afficheur8.component';
import { AccueilComponent } from './accueil/accueil.component';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
  {path : '', component : AccueilComponent},
  {path : 'Afficheur8', component : Afficheur8Component},
]
@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    Afficheur8Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
