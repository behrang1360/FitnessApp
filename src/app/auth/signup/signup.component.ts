import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  @ViewChild("signupForm", { static: false }) signupForm: NgForm;

  minDate;
  maxDate:Date;

  constructor() {}

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(new Date().getFullYear() - 18);
  }

  onSubmit() {
    console.log(this.signupForm.value.email);
  }
}
