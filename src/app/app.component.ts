import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <div>
    <img [src]="image" />
    <img src={{imageURL}} />
  </div>
  <header></header>
  
  `
})

export class AppComponent { 
  //import selector
  public title = "hello Admin..!";

  //import attribute
  public image = "http://lorempixel.com/480/360";

  //import example
  public imageURL = "http://lorempixel.com/480/360";

}
