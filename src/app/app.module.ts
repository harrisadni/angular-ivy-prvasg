import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatOptionHeightDirective } from './mat-option-height.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatSelectModule, BrowserAnimationsModule ],
  declarations: [ AppComponent, HelloComponent, MatOptionHeightDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
