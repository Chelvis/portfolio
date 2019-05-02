import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { metaData } from 'src/app/models/metaData';

@Injectable({
  providedIn: 'root'
})
export class MetaTagsService {

  constructor(private meta: Meta, private titleService: Title) { }

  setMetaData(data: metaData) {

    this.titleService.setTitle(`${data.title ? data.title + ' – ' : ''} Kelvin Marques Web Dev`);

    this.meta.addTags([

      { name: 'description', content: data.description },
      { name: 'keywords', content: data.keywords },
      { name: 'author', content: 'Kelvin Marques' },

      { name: 'twitter:title', content: data.title },
      { name: 'twitter:description', content: data.description },
      { name: 'twitter:image', content: 'https://alligator.io/images/front-end-cover.png' },
      { name: 'twitter:site', content: data.url },
      { name: 'twitter:creator', content: 'Kelvin Marques' },

      { name: 'og:site_name', content: 'Kelvin Marques – Web Developer' },
      { name: 'og:type', content: 'website' },
      { name: 'og:locale', content: 'pt-BR' },
      { name: 'og:title', content: data.title },
      { name: 'og:description', content: '' },
      { name: 'og:image', content: '' },
      { name: 'og:url', content: data.url }
    ], true)


  }

}
