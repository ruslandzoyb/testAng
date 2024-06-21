import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isDisplay = true;
  title = 'Initial set';
  ngOnInit(): void {

  }

  onClick(){
    console.log(this.title);
  }

  onClick2(){
    this.title = 'This was changed from click 2'
  }



}
