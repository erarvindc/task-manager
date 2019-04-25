import { Component, OnInit } from '@angular/core';
import {Task} from '../../model/Task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasksData: Task[];

  constructor() { }

  ngOnInit() {

    this.tasksData = [
      {
        id: 1,
        detail: 'Task one',
        completed: false,
        just:'sgs'
      },
      {
        id: 2,
        detail: 'Task two',
        completed: true,
        just:'sgs'
      },
      {
        id: 3,
        detail: 'Task three',
        completed: false
      }
  ]
  }

}
