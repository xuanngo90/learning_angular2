import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { headerSection } from './header.component';
import { inputSection } from './input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent,headerSection,inputSection ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
