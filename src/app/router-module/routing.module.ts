import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { PortfolioComponent } from '../components/portfolio/portfolio.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';
import { Pg404Component } from '../components/pg404/pg404.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'por-que-um-site', component: HomeComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'sobre', component: AboutComponent},
  {path: 'contato', component: ContactComponent},
  {path: '**', component: Pg404Component, pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
    { enableTracing: true })
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
