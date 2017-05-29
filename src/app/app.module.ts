import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { headerSection } from './header.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent,headerSection ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
