import { Component } from "@angular/core";


@Component ({
    selector: 'title', 
    template: '<h2>I am the {{  title  }}<h2>'
})




export class DemoComponent {

    title = "Future"

}