import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RoutingModule } from '../../router-module/routing.module';
import { ContactLinksModule } from './contact-links/contact-links.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
    ContactLinksModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
