import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidnav',
  templateUrl: './sidnav.component.html',
  styleUrls: ['./sidnav.component.css']
})
export class SidnavComponent implements OnInit {

  @Input() sideNav: any;
  constructor() { }

  ngOnInit() {
  }

}
