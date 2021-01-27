import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AppService {
  name: any;
  url = "https://api.agify.io/?name=";

  constructor(private _http: HttpClient) {}

  getDetails() {
    return this._http.get(this.url + this.name);
  }
}
