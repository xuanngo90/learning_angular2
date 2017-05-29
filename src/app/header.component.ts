import { Component } from '@angular/core';

@Component({
    selector: 'header',
    template: `
    <div class="headerLeft">
        <h1><a href="/" title="Go to Home">Logo</a></h1>
    </div>

    <div class="headerRight">
        <div [class.redColor]="applyClass" >Hello <a href="" title="Hello">admin.!</a></div>
        <nav>
            <a href="" title="Trang chu">Trang chu</a>
            <a href="" title="Gioi thieu">Gioi thieu</a>
            <a href="" title="San pham">San pham</a>
            <a href="" title="Lien he">Lien he</a>
        </nav>
    </div>

    <h4 [style.color]="blueColor?'blue':'green'" >Apply Style !</h4>

    <button (click)="OnClick(name.value)">Click Me..!</button>

    <input type="text" #name >

    <h3>for lesson 10</h3>
    <input type="text"  [(ngModel)]= "fname" />
    <input type="text"  [(ngModel)]= "lname" />
    <br>
    <span>Fullname: {{fname}} {{lname}}</span>


    <h3>for lesson 11</h3>
    <h4 *ngIf="showLiveIf">This ngIf directive line.</h4>

    <!-- Switch -->
    <div [ngSwitch]="color">
        <p *ngSwitchCase="'red'">This is line red</p>
        <p *ngSwitchCase="'blue'">This is line blue</p>
        <p *ngSwitchCase="'green'">This is line green</p>
        <p *ngSwitchDefault>This is line default</p>
    </div>

    <ul>
        <li *ngFor="let color of colors">{{color}}</li>
    </ul>

    <h3>for lesson 12</h3>
    <p [ngClass]="{classOne:cone, classTwo:ctwo}">This is ngClass apply Style</p>
    <button (click)="toggleClass()">Toggle class</button>

    <p [ngStyle]="{'font-style':style,'font-size':size}">This paragaph will be apply to ngStyle</p>
    `,
    styles: [
        `
        .redColor {
            color: red;
        }
        .classOne {
            color: white;
        }
        .classTwo {
            background-color: black;
        }
        `
    ]
})
export class headerSection {
    public applyClass = false;

    public blueColor = false;

    // OnClick(value){
    //     console.log(value);
    // }

    public showLiveIf = true;

    public color = "asdas";

    public colors: string[] = ["red", "green", "blue"];

    public cone = true;
    public ctwo = true;
    toggleClass(){
        this.cone = !this.cone;
        this.ctwo = !this.ctwo;
    }

    public style="italic";
    public size="30px";
}