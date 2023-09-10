import { Component } from '@angular/core';
import { Task } from '../interfaces/task';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() { }

  tasks: Task[] = [];

  onTaskAdded(task: Task) {
    this.tasks.push(task);
  }
}
