import {Component} from '@angular/core';

@Component({
    selector:'header',
    template:`
    <div class="headerLeft">
        <h1><a href="/" title="Go to Home">Logo</a></h1>
    </div>

    <div class="headerRight">
        <div class="userNav">Hello <a href="" title="Hello">admin.!</a></div>
        <nav>
            <a href="" title="Trang chu">Trang chu</a>
            <a href="" title="Gioi thieu">Gioi thieu</a>
            <a href="" title="San pham">San pham</a>
            <a href="" title="Lien he">Lien he</a>
        </nav>
    </div>
    `
})
export class headerSection{

}