import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { metaData } from 'src/app/models/metaData';

@Injectable({
  providedIn: 'root'
})
export class MetaTagsService {

  constructor(private meta: Meta, private titleService: Title) { }

  setMetaData(data: metaData) {

    this.setTitle(data.title);

    this.meta.updateTag({ name: 'description', content: data.description });
    this.meta.updateTag({ name: 'keywords', content: data.keywords });

    this.meta.updateTag({ property: 'twitter:title', content: data.title });
    this.meta.updateTag({ property: 'twitter:description', content: data.description });
    this.meta.updateTag({ property: 'twitter:site', content: data.url });

    this.meta.updateTag({ property: 'og:title', content: data.title });
    this.meta.updateTag({ property: 'og:description', content: data.description });
    this.meta.updateTag({ property: 'og:url', content: data.url });

  }

  setTitle(title?) {
    this.titleService.setTitle(`${title ? title + ' – ' : ''} Kelvin Marques Web Dev`);
  }

}
