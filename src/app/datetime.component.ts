import { Component } from '@angular/core';

@Component({
  selector: '.hero-birthday',
  template: 
  `
  <p>The hero's birthday is: {{ birthday | date:"fullDate" }}</p>
  `
})
export class HeroBirthdayComponent {
  birthday = new Date(1990, 0, 29); // April 15, 1988
}