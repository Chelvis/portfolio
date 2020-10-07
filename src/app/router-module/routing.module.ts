import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AboutComponent } from '../components/about/about.component'
import { ContactComponent } from '../components/contact/contact.component'
import { Pg404Component } from '../components/pg404/pg404.component'
import { PortfolioComponent } from '../components/portfolio/portfolio.component'


const routes: Routes = [
  {path: '', redirectTo: 'sobre', pathMatch: 'full'},
  // {path: 'por-que-um-site', component: HomeComponent},
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
