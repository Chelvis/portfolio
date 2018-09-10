import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { SharedModule } from './components/shared/shared.module';
import { RoutingModule } from './router-module/routing.module';
import { ServicesModule } from './services/services.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    SharedModule,
    RoutingModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
