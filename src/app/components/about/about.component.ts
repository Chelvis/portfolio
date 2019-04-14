import { Component, OnInit } from '@angular/core';
import { CurriculumService } from '../../services/curriculum/curriculum.service';
import { Depoiment } from 'src/app/models/depoiments';

@Component({
  selector: 'app-components',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  curriculum: any;
  displayingData: 'CUR' | 'PES' | 'DEP' = 'CUR';
  expRanks: any = {};
  libsRanks: any = {};
  toolsRanks: any = {};

  depoiments: Depoiment[];

  constructor(
    private curriculumService: CurriculumService
  ) { }

  ngOnInit() {
    this.getCurricyulum();
    this.getDepoiments();
  }

  getCurricyulum() {
    this.curriculumService.getCurriculum().subscribe(data => {

      this.expRanks = data.experiencia.map(exp => {
        exp.rank = this.setRankHTML(exp.rank);
        return exp;
      });

      this.libsRanks = data.libs.map(lib => {
        lib.rank = this.setRankHTML(lib.rank);
        return lib;
      });

      this.toolsRanks = data.ferramentas.map(tool => {
        tool.rank = this.setRankHTML(tool.rank);
        return tool;
      });

      this.curriculum = data;

    });
  }

  getDepoiments() {
    this.curriculumService.getDepoiments().subscribe((data: Depoiment[]) => {
      this.depoiments = data;
    });
  }

  setRankHTML(rank) {
    let html = '';
    for (let x = 1; x <= rank; x++) {
      html += '<i class="fa fa-star"></i>';
    }
    return html;
  }

}
