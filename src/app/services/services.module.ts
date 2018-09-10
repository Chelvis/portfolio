import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from './contact/contact.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ContactService
  ]
})
export class ServicesModule { }
