import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-tarining',
  templateUrl: './new-tarining.component.html',
  styleUrls: ['./new-tarining.component.css']
})
export class NewTariningComponent implements OnInit {

  @Output() newTrainingStart = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onNewTrainingStart() {
    this.newTrainingStart.emit();
  }

}
