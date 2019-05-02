import { Component, OnInit } from '@angular/core';
import { CurriculumService } from '../../services/curriculum/curriculum.service';
import { MetaTagsService } from 'src/app/services/metaTags/meta-tags.service';
import { metaData } from 'src/app/models/metaData';

@Component({
  selector: 'app-components',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  curriculum: any;
  displayingData = 'CUR';
  expRanks: any;
  toolsRanks: any;

  constructor(
    private curriculumService: CurriculumService,
    private metaService: MetaTagsService
  ) { }

  ngOnInit() {

    this.metaService.setMetaData(new metaData(
      'Sobre Mim',
      'Um pouco sobre minha história profissional e pessoal.',
      'http://www.kelvinmarques.com.br/sobre',
      'Site, Website, desenvolvimento web, página, Kelvin, Relatório Anual, Solução, Currículo, pessoal, habilidades'
    ));

    this.expRanks = {};
    this.toolsRanks = {};

    this.curriculumService.get().subscribe(data => {

      Object.keys(data.experiencia).forEach((key) => {

        this.expRanks[key] = '';

        for (let y = 1; y <= data.experiencia[key]; y++) {
          this.expRanks[key] += '<i class="fa fa-star"></i>';
        }

      });

      Object.keys(data.ferramentas).forEach((key) => {

        this.toolsRanks[key] = '';

        for (let y = 1; y <= data.ferramentas[key]; y++) {
          this.toolsRanks[key] += '<i class="fa fa-star"></i>';
        }

      });

      this.curriculum = data;

    });
  }

}
