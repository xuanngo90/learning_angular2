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
var inputSection = (function () {
    function inputSection() {
        this.onVote = new core_1.EventEmitter();
        this.voted = false;
    }
    inputSection.prototype.setName = function (name) {
        this.name = name;
    };
    inputSection.prototype.vote = function (agree) {
        this.voted = true;
        this.onVote.emit(agree);
    };
    return inputSection;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], inputSection.prototype, "name", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], inputSection.prototype, "onVote", void 0);
inputSection = __decorate([
    core_1.Component({
        selector: '.my-input',
        template: "\n        <h2>{{title}}</h2>\n        <p>Child component: {{name}}</p>\n\n        <button [disabled]=\"voted\" (click)=\"vote(true)\">Agree</button>\n        <button [disabled]=\"voted\" (click)=\"vote(false)\">Disgree</button>\n        Result: {{voted}}\n    "
    })
], inputSection);
exports.inputSection = inputSection;
//# sourceMappingURL=input.component.js.map