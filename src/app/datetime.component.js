"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HeroBirthdayComponent = (function () {
    function HeroBirthdayComponent() {
        this.birthday = new Date(1990, 0, 29); // April 15, 1988
    }
    return HeroBirthdayComponent;
}());
HeroBirthdayComponent = __decorate([
    core_1.Component({
        selector: '.hero-birthday',
        template: "\n  <p>The hero's birthday is: {{ birthday | date:\"fullDate\" }}</p>\n  "
    })
], HeroBirthdayComponent);
exports.HeroBirthdayComponent = HeroBirthdayComponent;
//# sourceMappingURL=datetime.component.js.map