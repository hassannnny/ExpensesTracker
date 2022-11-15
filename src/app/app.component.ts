import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {}


  row = []; 

  itemRow: Array<string | number>= [];

  date: string = "";
  item: string = ""; 
  catagory: string = ""; 
  amount: number = 0; 

  

}
