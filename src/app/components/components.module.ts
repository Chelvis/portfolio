import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Pg404Component } from './pg404/pg404.component';
import { RoutingModule } from '../router-module/routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TextMaskModule  } from 'angular2-text-mask';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule
  ],
  declarations: [
    ContactComponent,
    HomeComponent,
    PortfolioComponent,
    AboutComponent,
    FooterComponent,
    Pg404Component,
  ],
  exports: [
    ContactComponent,
    HomeComponent,
    PortfolioComponent,
    AboutComponent,
    FooterComponent,
    Pg404Component
  ]
})
export class ComponentsModule { }
