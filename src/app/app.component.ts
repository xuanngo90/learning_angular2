import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>Hello {{name}}</h1>
  <header></header>
  `
})
export class AppComponent { name = 'Angular'; }
