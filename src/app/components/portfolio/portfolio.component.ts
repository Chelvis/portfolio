import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio/portfolio.service';
import { Job } from 'src/app/models/job';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(
    private portfolioService: PortfolioService
  ) { }

  portfolio: Job[];

  ngOnInit() {

    this.portfolioService.list().subscribe((data: Job[]) => {

      data.reverse();

      this.portfolio = data;

    });

  }

}
