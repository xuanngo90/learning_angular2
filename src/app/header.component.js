"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var headerSection = (function () {
    function headerSection() {
        this.applyClass = false;
        this.blueColor = false;
        // OnClick(value){
        //     console.log(value);
        // }
        this.showLiveIf = true;
        this.color = "asdas";
        this.colors = ["red", "green", "blue"];
        this.cone = true;
        this.ctwo = true;
        this.style = "italic";
        this.size = "30px";
    }
    headerSection.prototype.toggleClass = function () {
        this.cone = !this.cone;
        this.ctwo = !this.ctwo;
    };
    return headerSection;
}());
headerSection = __decorate([
    core_1.Component({
        selector: 'header',
        template: "\n    <div class=\"headerLeft\">\n        <h1><a href=\"/\" title=\"Go to Home\">Logo</a></h1>\n    </div>\n\n    <div class=\"headerRight\">\n        <div [class.redColor]=\"applyClass\" >Hello <a href=\"\" title=\"Hello\">admin.!</a></div>\n        <nav>\n            <a href=\"\" title=\"Trang chu\">Trang chu</a>\n            <a href=\"\" title=\"Gioi thieu\">Gioi thieu</a>\n            <a href=\"\" title=\"San pham\">San pham</a>\n            <a href=\"\" title=\"Lien he\">Lien he</a>\n        </nav>\n    </div>\n\n    <h4 [style.color]=\"blueColor?'blue':'green'\" >Apply Style !</h4>\n\n    <button (click)=\"OnClick(name.value)\">Click Me..!</button>\n\n    <input type=\"text\" #name >\n\n    <h3>for lesson 10</h3>\n    <input type=\"text\"  [(ngModel)]= \"fname\" />\n    <input type=\"text\"  [(ngModel)]= \"lname\" />\n    <br>\n    <span>Fullname: {{fname}} {{lname}}</span>\n\n\n    <h3>for lesson 11</h3>\n    <h4 *ngIf=\"showLiveIf\">This ngIf directive line.</h4>\n\n    <!-- Switch -->\n    <div [ngSwitch]=\"color\">\n        <p *ngSwitchCase=\"'red'\">This is line red</p>\n        <p *ngSwitchCase=\"'blue'\">This is line blue</p>\n        <p *ngSwitchCase=\"'green'\">This is line green</p>\n        <p *ngSwitchDefault>This is line default</p>\n    </div>\n\n    <ul>\n        <li *ngFor=\"let color of colors\">{{color}}</li>\n    </ul>\n\n    <h3>for lesson 12</h3>\n    <p [ngClass]=\"{classOne:cone, classTwo:ctwo}\">This is ngClass apply Style</p>\n    <button (click)=\"toggleClass()\">Toggle class</button>\n\n    <p [ngStyle]=\"{'font-style':style,'font-size':size}\">This paragaph will be apply to ngStyle</p>\n    ",
        styles: [
            "\n        .redColor {\n            color: red;\n        }\n        .classOne {\n            color: white;\n        }\n        .classTwo {\n            background-color: black;\n        }\n        "
        ]
    })
], headerSection);
exports.headerSection = headerSection;
//# sourceMappingURL=header.component.js.map