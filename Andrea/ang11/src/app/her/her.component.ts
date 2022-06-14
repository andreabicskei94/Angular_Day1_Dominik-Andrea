import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-her',
  templateUrl: './her.component.html',
  styleUrls: ['./her.component.css']
})
export class HerComponent implements OnInit {
  
 heroText1:string ="We are your ultimate Summer experience Provider!";
 heroText2:string ="With hundreds of summer holiday destinations offered,<br> we are your natural choice for planning it all out!";
  constructor() { }

  ngOnInit(): void {
  }

}
