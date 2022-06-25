import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class DataService {
  private API_URL = "http://localhost:3000";

  constructor(private httpClient: HttpClient) {}

  public sendGetRequest() {
    return this.httpClient.get(`${this.API_URL}/list-all-players`);
  }

  public findRuns() {
    return this.httpClient.get(`${this.API_URL}/find-who-has-scored-more-runs`);
  }
  public findInnings() {
    return this.httpClient.get(
      `${this.API_URL}/find-who-played-most-of-the-innings`
    );
  }
  public findBalls() {
    return this.httpClient.get(
      `${this.API_URL}/find-who-played-least-number-of-balls`
    );
  }
  public findBoundarySixes() {
    return this.httpClient.get(
      `${this.API_URL}/find-most-to-fewest-boundary-sixes`
    );
  }
  public findBattingStrikeRate() {
    return this.httpClient.get(
      `${this.API_URL}/find-highest-batting-strike-rate`
    );
  }
  public deleteApi(data) {
    // console.log("jhgfchgchjk", data);

    return this.httpClient.delete(`${this.API_URL}/delete-player`, data);
  }
}
