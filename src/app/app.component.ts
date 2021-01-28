import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { AppService } from "./app.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "nameApp";
  details: any;
  isDetail: boolean = false;

  userName = new FormControl("", [Validators.required]);

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
    }
  }

  getAllCommits(): void {
    this.appService.getDetails().subscribe((response: any) => {
      this.details = response;
      this.isDetail = true;
      console.log(this.details);
    });
  }

  onNameChange(): any {
    this.userName.setValidators([Validators.required]);
    this.userName.updateValueAndValidity();
  }
}
