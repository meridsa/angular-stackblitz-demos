import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { TestNgModelComponent } from "./test-ng-model/test-ng-model.component";
import { AppRoutingModule } from "./app.routing.module";
import { CytoscapeTestComponent } from './cytoscape-test/cytoscape-test.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, HelloComponent, TestNgModelComponent, CytoscapeTestComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
