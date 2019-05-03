import { Component, OnInit } from '@angular/core';
import { MetaTagsService } from 'src/app/services/metaTags/meta-tags.service';
import { metaData } from 'src/app/models/metaData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private metaService: MetaTagsService
  ) { }

  ngOnInit() {
    this.setMetaData();
  }

  setMetaData() {
    this.metaService.setMetaData(new metaData(
      'Soluções online para o seu negócio',
      'Soluções online para divulgar seu negócio com visibilidade, flexibilidade e facilidade.',
      'http://www.kelvinmarques.com.br/',
      'Site, Website, desenvolvimento web, página, Kelvin, Relatório Anual, Solução'
    ));
  }

}
