import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  displayingData = 'CUR';

  constructor() { }

  ngOnInit() {
  }

}
