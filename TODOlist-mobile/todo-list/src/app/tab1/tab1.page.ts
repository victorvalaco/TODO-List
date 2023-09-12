import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../interfaces/task';
import { ItemReorderEventDetail } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  tasks: Task[] = [];
  checkBoxesSelected: boolean = false;

  constructor() { }

  onTaskAdded(task: Task) {
    this.tasks.push(task);
  }

  deleteTask(task: Task) {
    const index = this.tasks.indexOf(task);
    if (index > -1) {
      this.tasks[index].completed = false
      this.checkSelection()
      this.tasks.splice(index, 1);
    }
  }

  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    ev.detail.complete();
  }

  checkSelection() {
    this.checkBoxesSelected = this.tasks.some(task => task.completed);
  }
}
