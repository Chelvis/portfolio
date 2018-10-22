import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from './contact/contact.service';
import { CurriculumService } from './curriculum/curriculum.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    HttpClient,
    ContactService,
    CurriculumService
  ]
})
export class ServicesModule { }
