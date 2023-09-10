import { Component } from '@angular/core';
import { Task } from '../interfaces/task';
import { Gesture, GestureController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private gestureCtrl: GestureController) {

  }

  tasks: Task[] = [];

  onTaskAdded(task: Task) {
    this.tasks.push(task);
  }

  deleteTask(task: Task) {
    const index = this.tasks.indexOf(task);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
  }
}
