import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio/portfolio.service';
import { Job } from 'src/app/models/job';
import { MetaTagsService } from 'src/app/services/metaTags/meta-tags.service';
import { metaData } from 'src/app/models/metaData';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(
    private portfolioService: PortfolioService,
    private metaService: MetaTagsService
  ) { }

  portfolio: Job[];

  ngOnInit() {
    this.setMetaData();
    this.listPortfolio();
  }

  listPortfolio() {
    this.portfolioService.list().subscribe((data: Job[]) => {
      data.reverse();
      this.portfolio = data;
    });
  }

  setMetaData() {
    this.metaService.setMetaData(new metaData(
      'Portfólio',
      'Alguns dos meus melhores trabalhos.',
      'http://www.kelvinmarques.com.br/portfolio',
      'Site, Website, desenvolvimento web, página, Kelvin, Relatório Anual, Trabalhos, Portfólio, Currículo, Exemplos, Modelos'
    ));
  }

}
