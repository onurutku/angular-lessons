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
  constructor() {}

  submitFunc() {
    this.serverCreated = true;
    this.pText = this.username;
    this.username = '';
  }
  getColor() {
    return this.serverCreated ? 'red' : 'green';
  }

  ngOnInit(): void {}
}
