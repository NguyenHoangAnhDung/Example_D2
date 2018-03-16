import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { DashBoardComponent } from './dashboard/dashboard.component';
import { ItemService } from './item.service';

import { Angular2TokenService } from 'angular2-token';


@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterializeModule,
    HttpModule
  ],
  providers: [ ItemService, Angular2TokenService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
