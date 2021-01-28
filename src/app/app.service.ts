import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AppService {
  name: any;
  url = "https://api.agify.io/?name=";

  headerDict = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  constructor(private _http: HttpClient) {}

  requestOptions = {
    headers: new Headers(this.headerDict),
  };

  getDetails() {
    return this._http
      .get(this.url + this.name)
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
