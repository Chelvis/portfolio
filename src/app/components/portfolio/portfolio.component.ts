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
  itemPerRow = 3;
  rowPerSlide = 2;
  slideInterval = false;

  ngOnInit() {

    this.portfolioService.list().subscribe((data: Job[]) => {

      data.reverse();

      let row = [];
      let slide = [];
      const organizedPortfolio = [];

      data.forEach((e, i) => {

        row.push(e);

        if ((i + 1) % this.itemPerRow === 0) {
          slide.push(row);
          row = [];
          if (slide.length === this.rowPerSlide) {
            organizedPortfolio.push(slide);
            slide = [];
          }
        }
      });

      if (row.length) {
        slide.push(row);
        organizedPortfolio.push(slide);
      }

      this.portfolio = organizedPortfolio;

      console.log(this.portfolio);

    });

  }

}
