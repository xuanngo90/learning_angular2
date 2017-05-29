import { Component, ViewChild } from '@angular/core';

//Kết Nối với input.component.ts
import { inputSection } from './input.component';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <header></header>
  <input type="text" #textName (keyup)="0" />
  <my-input [name]="textName.value"></my-input>
  `,
})

export class AppComponent { 
  //import selector
  public title = "hello Admin..!";

}
