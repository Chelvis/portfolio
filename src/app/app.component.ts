import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  constructor(private meta: Meta) {}
  
  ngOnInit() {
    this.addMetaTags()
  }

  addMetaTags() {
    this.meta.addTags([
  
      { name: 'description', content: '' },
      { name: 'keywords', content: '' },
      { name: 'author', content: 'Kelvin Marques' },
  
      { property: 'twitter:title', content: '' },
      { property: 'twitter:description', content: '' },
      { property: 'twitter:image', content: 'https://alligator.io/images/front-end-cover.png' },
      { property: 'twitter:site', content: '' },
      { property: 'twitter:creator', content: 'Kelvin Marques' },
  
      { property: 'og:site_name', content: 'Kelvin Marques – Web Developer' },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'pt-BR' },
      { property: 'og:title', content: '' },
      { property: 'og:description', content: '' },
      { property: 'og:image', content: '' },
      { property: 'og:url', content: '' }
    ], true)
  }
}

