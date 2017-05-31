"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//Kết Nối với input.component.ts
var input_component_1 = require("./input.component");
var AppComponent = (function () {
    function AppComponent() {
        //import selector
        this.title = "hello Admin..!";
        this.agree = 0;
        this.disgree = 0;
        this.names = ['Mr.A', 'Mr.B', 'Mr.C', 'Mr.D'];
    }
    AppComponent.prototype.parentVote = function (agree) {
        if (agree)
            this.agree++;
        else
            this.disgree++;
    };
    // <input type="text" #textName (keyup)="0" /> textName.value
    AppComponent.prototype.changeName = function () {
        this.InputSection.setName('Change name in Parent');
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild(input_component_1.inputSection),
    __metadata("design:type", input_component_1.inputSection)
], AppComponent.prototype, "InputSection", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  <h1>{{title}}</h1>\n  <header></header>\n \n  <button (click)=\"changeName()\">Change Name</button>\n\n  <p>Agree number: {{agree}} - Disgree number: {{disgree}}</p>\n  <div class=\"my-input\" *ngFor=\"let person of names\" [name]=\"person\" (onVote)=\"parentVote($event)\"></div>\n\n  <div class=\"hero-birthday\"></div>\n  ",
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map