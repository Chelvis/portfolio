import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactLinksComponent } from './contact-links.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ContactLinksComponent],
  declarations: [ContactLinksComponent]
})
export class ContactLinksModule { }
