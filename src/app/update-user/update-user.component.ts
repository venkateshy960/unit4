import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-update-user",
  templateUrl: "./update-user.component.html",
  styleUrls: ["./update-user.component.css"],
})
export class UpdateUserComponent implements OnInit {
  data: any = [];
  constructor() {}

  ngOnInit(): void {
    // console.log(window.history.state, "data");
    this.data = window.history.state;
  }
  onSubmit(name) {
    console.log("--------", name);
  }
}
