import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule, MatTableModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
// components
import { AppComponent } from './app.component';
import { ListViewComponent } from './list-view/list-view.component';

// services
import {AppStateManagerService} from './services/app-state-manager.service';


@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [AppStateManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
