import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';
import { ComoditycomponentComponent } from './comoditycomponent/comoditycomponent.component';
import { SearchcomponentComponent } from './searchcomponent/searchcomponent.component';
import { FilterdatacomponentComponent } from './filterdatacomponent/filterdatacomponent.component';
import { SerachpiprPipe } from './filterdatacomponent/serachpipr.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule ],
  declarations: [ AppComponent, DialogComponent, ComoditycomponentComponent, SearchcomponentComponent, FilterdatacomponentComponent, SerachpiprPipe ],
  exports :[SerachpiprPipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
