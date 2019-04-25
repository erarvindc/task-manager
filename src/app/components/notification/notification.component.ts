import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  messages:string[];

  constructor() { }

  ngOnInit() {
    this.messages = [
      'Task 1 created',
      'Task 1 marked completed'
    ]; 
  }

}
