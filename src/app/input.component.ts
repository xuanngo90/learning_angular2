import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: '.my-input',
    template: `
        <h2>{{title}}</h2>
        <p>Child component: {{name}}</p>

        <button [disabled]="voted" (click)="vote(true)">Agree</button>
        <button [disabled]="voted" (click)="vote(false)">Disgree</button>
        Result: {{voted}}
    `
})
export class inputSection {
    @Input() name: string;

    @Output() onVote = new EventEmitter<boolean>();

    public voted:boolean = false;

	setName(name:string) {
		this.name = name;
	}

    vote(agree:boolean){
        this.voted = true;
        this.onVote.emit(agree);
    }
}