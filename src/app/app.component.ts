import { Component, ViewChild } from '@angular/core';

//Kết Nối với input.component.ts
import { inputSection } from './input.component';
//Kết Nối với datetime.component.ts
import { HeroBirthdayComponent } from './datetime.component';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <header></header>
 
  <button (click)="changeName()">Change Name</button>

  <p>Agree number: {{agree}} - Disgree number: {{disgree}}</p>
  <div class="my-input" *ngFor="let person of names" [name]="person" (onVote)="parentVote($event)"></div>

  <div class="hero-birthday"></div>
  `,
})

export class AppComponent { 
  //import selector
  public title = "hello Admin..!";

  public agree:number = 0;
  public disgree:number = 0;
  public names = ['Mr.A','Mr.B','Mr.C','Mr.D'];

  @ViewChild(inputSection)
  private InputSection : inputSection;

  parentVote(agree:boolean){
    if(agree) this.agree++;
    else this.disgree++;
  }
  // <input type="text" #textName (keyup)="0" /> textName.value
  changeName(){
    this.InputSection.setName('Change name in Parent');
  } 
}
