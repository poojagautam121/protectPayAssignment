import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./shared/material/material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { AppService } from "./app.service";
import { HttpClientModule } from "@angular/common/http";
import { MatTableModule } from "@angular/material";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule, // Material module is added
    ReactiveFormsModule, // Used for Forms
    HttpClientModule, //for api,
    MatTableModule, // for table
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
