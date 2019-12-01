import { Component, OnInit, Output } from "@angular/core";
import { interval } from "rxjs";
import { MatDialog } from "@angular/material";
import { DialogboxComponent } from "src/app/shared/dialogbox/dialogbox.component";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "app-current-tarining",
  templateUrl: "./current-tarining.component.html",
  styleUrls: ["./current-tarining.component.css"]
})
export class CurrentTariningComponent implements OnInit {
  progressValue = 0;
  interval: number;
  state = false;
  @Output() quitTrainig = new EventEmitter<void>();
  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.startInterval();
  }

  startInterval() {
    this.state = true;
    this.interval = setInterval(() => {
      this.progressValue = this.progressValue + 1;
      if (this.progressValue >= 100) {
        clearInterval(this.interval);
        this.state = false;
      }
    }, 100);
  }

  stopInterval() {
    const dialoRef = this.dialog.open(DialogboxComponent, {
      data: { progress: this.progressValue }
    });

    dialoRef.afterClosed().subscribe(result => {
      if (result) {
        clearInterval(this.interval);
        this.state = false;
        this.quitTrainig.emit();
      } else {
        this.startInterval();
      }
    });
  }
}
