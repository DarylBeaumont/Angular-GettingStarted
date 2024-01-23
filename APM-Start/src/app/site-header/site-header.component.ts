import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pm-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {
  @Input() pageTitle: any;

  constructor() { }

  ngOnInit(): void {
  }

}
