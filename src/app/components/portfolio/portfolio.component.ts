import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  temp: any;

  ngOnInit() {
    this.temp = [];
    setTimeout(() => {
      const temp2: any = document.getElementsByTagName('a');

      for (let x = 0; x < temp2.length; x++) {

        const temp3 = temp2[x];

        const job: any = {};

        console.log(temp3.children);

        if (temp3) {
          job.link = temp3.getAttribute('href');
        }

        if (temp3.children.length > 1) {
        job.title = temp3.children[1].removeChild(temp3.children[1].childNodes[0]).innerHTML;
          job.imageTitle = temp3.children[0].getAttribute('src');
          if (temp3.children.children) {
            job.title = temp3.children[1].children[0].innerHTML;
          }
        }

        this.temp.push(job);
      }
    }, 1000);

  }

}
