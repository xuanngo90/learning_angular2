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
    }
    return headerSection;
}());
headerSection = __decorate([
    core_1.Component({
        selector: 'header',
        template: "\n    <div class=\"headerLeft\">\n        <h1><a href=\"/\" title=\"Go to Home\">Logo</a></h1>\n    </div>\n\n    <div class=\"headerRight\">\n        <div class=\"userNav\">Hello <a href=\"\" title=\"Hello\">admin.!</a></div>\n        <nav>\n            <a href=\"\" title=\"Trang chu\">Trang chu</a>\n            <a href=\"\" title=\"Gioi thieu\">Gioi thieu</a>\n            <a href=\"\" title=\"San pham\">San pham</a>\n            <a href=\"\" title=\"Lien he\">Lien he</a>\n        </nav>\n    </div>\n    "
    })
], headerSection);
exports.headerSection = headerSection;
//# sourceMappingURL=header.component.js.map