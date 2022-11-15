import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'NavBarWTitle',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {

  s = "Hassan Inc."

  constructor() { }

  ngOnInit(): void {
  }

}



//title with navbar 