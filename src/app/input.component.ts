import { Component, Input } from '@angular/core';

@Component({
    selector: 'my-input',
    template: `
        <h2>{{title}}</h2>
        <p>Child component: {{name}}</p>

        <button [disabled]="voted" (click)="vote(true)">Agree</button>
        <button [disabled]="voted" (click)="vote(false)">Disgree</button>
    `
})
export class inputSection {
     @Input() name: string;

     public voted:boolean = false;
     vote(agree:boolean){
         this.voted = true;
     }
}