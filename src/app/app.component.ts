import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { AppService } from "./app.service";
import { MatTableDataSource } from "@angular/material";

export interface PeriodicElement {
  name: string;
  age: number;
  count: number;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "nameApp";
  details: any = [];
  isDetail: boolean = false;
  dataSource: any;
  pattern: any = "/^[a-zA-Z '.-]*$/";

  displayedColumns: string[] = ["name", "age", "count"];

  userName = new FormControl("", [
    Validators.required,
    Validators.pattern(this.pattern),
  ]);

  validationMessages: { [key: string]: { [key: string]: string } };

  constructor(private _fb: FormBuilder, private appService: AppService) {
    this.validationMessages = {
      userName: {
        required: "This field is required",
      },
    };
  }

  ngOnInit() {}

  onSubmit() {
    if (this.userName.valid) {
      this.appService.name = this.userName.value;
      this.getAllCommits();
    } else {
      this.isDetail = false;
      this.dataSource = new MatTableDataSource([]);
    }
  }

  getAllCommits(): void {
    this.appService.getDetails().subscribe((response: any) => {
      this.details.push(response);
      this.dataSource = new MatTableDataSource(this.details);
      this.isDetail = true;
    });
  }

  onNameChange(): any {
    this.userName.setValidators([
      Validators.required,
      Validators.pattern(this.pattern),
    ]);
    this.userName.updateValueAndValidity();
  }
}
