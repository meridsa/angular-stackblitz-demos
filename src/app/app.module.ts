import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgStackFormsModule } from '@ng-stack/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgStackTestComponent } from './ng-stack-test/ng-stack-test.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgStackFormsModule ],
  declarations: [ AppComponent, HelloComponent, NgStackTestComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
