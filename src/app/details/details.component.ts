import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"],
})
export class DetailsComponent implements OnInit {
  data: any = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getAllData();
  }
  getAllData() {
    this.dataService.sendGetRequest().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getMoreRuns() {
    this.dataService.findRuns().subscribe((response: any) => {
      this.data = response?.response;
      console.log("getMoreRuns", this.data);
    });
  }
  getInnings() {
    this.dataService.findInnings().subscribe((response: any) => {
      this.data = response?.response;
      console.log("getInnings", this.data);
    });
  }
  getBalls() {
    this.dataService.findBalls().subscribe((response: any) => {
      this.data = response?.response;
      console.log("getBalls", this.data);
    });
  }
  getBoundarySixes() {
    this.dataService.findBoundarySixes().subscribe((response: any) => {
      this.data = response?.response;
      console.log("getBoundarySixes", this.data);
    });
  }
  getBattingStrikeRate() {
    this.dataService.findBattingStrikeRate().subscribe((response: any) => {
      this.data = response?.response;
      console.log("getBattingStrikeRate", this.data);
    });
  }
  getDelete(deleteData) {
    this.dataService
      .deleteApi({ name: deleteData })
      .subscribe((response: any) => {
        this.data = response?.response;
        console.log("getDelete", this.data);
      });
  }
  onOptionsSelected(value: string) {
    if (value === "findRuns") {
      this.getMoreRuns();
    } else if (value === "findInnings") {
      this.getInnings();
    } else if (value === "findBalls") {
      this.getBalls();
    } else if (value === "findBoundarySixes") {
      this.getBoundarySixes();
    } else if (value === "findBattingStrikeRate") {
      this.getBattingStrikeRate();
    } else {
      this.getAllData();
    }
  }
  deleteUser(name: string) {
    this.getDelete(name);
  }
}
