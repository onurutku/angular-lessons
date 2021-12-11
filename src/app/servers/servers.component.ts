import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  username: any = 'test';
  serverCreated: boolean = false;
  pText: any = '';
  hide: string = 'hide';
  logArray: any[] = [];
  arrlength: number;
  constructor() {}

  submitFunc() {
    this.serverCreated = true;
    this.pText = this.username;
    this.username = '';
  }
  getColor() {
    return this.serverCreated ? 'red' : 'green';
  }
  toggleParagraph() {
    if (this.hide == '') {
      this.hide = 'hide';
    } else {
      this.hide = '';
    }
    this.logArray.push(new Date());
    this.arrlength = this.logArray.length;
    console.log(this.arrlength);
  }
  ngOnInit(): void {}
}
