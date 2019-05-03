import { Component, OnInit } from '@angular/core';
import { MetaTagsService } from 'src/app/services/metaTags/meta-tags.service';

@Component({
  selector: 'app-pg404',
  templateUrl: './pg404.component.html',
  styleUrls: ['./pg404.component.scss']
})
export class Pg404Component implements OnInit {

  constructor(private metaService: MetaTagsService) { }

  ngOnInit() {
    this.metaService.setTitle('Página não encontrada')
  }

}
