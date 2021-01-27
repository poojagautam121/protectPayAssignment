import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AppService } from "./app.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "nameApp";
  userForm: FormGroup;
  details: any;
  isDetail: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private appService: AppService
  ) {}

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      userName: [" ", Validators.required],
    });
  }

  onSubmit() {
    let value = this.userForm.get("userName").value;
    if (value != "") {
      this.appService.name = value;
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
}
