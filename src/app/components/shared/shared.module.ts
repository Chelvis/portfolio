import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RoutingModule } from '../../router-module/routing.module';

@NgModule({
  imports: [
    CommonModule,
    RoutingModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
