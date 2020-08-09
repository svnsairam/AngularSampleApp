import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  paragraph:string = "Secret password is tuna";
  showParagraph:boolean = false;
  btnClicksLogs:string[] = [];
  noOfClicks:number=0;
  constructor() { }

  ngOnInit() {
  }

  togggleParagraph(){
    this.showParagraph = !this.showParagraph;
    this.btnClicksLogs.push("btn clicked = "+this.noOfClicks);
    this.noOfClicks++;
  }

}
