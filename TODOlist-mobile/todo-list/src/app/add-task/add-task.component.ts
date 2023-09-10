import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../interfaces/task';

@Component({
  selector: 'app-add-task',
  templateUrl: 'add-task.component.html',
  styleUrls: ['add-task.component.scss']
})

export class AddTaskComponent {
  @Output() taskAdded = new EventEmitter<Task>();

  show = false;
  taskName = '';

  showForm() {
    this.show = true;
  }

  cancelForm() {
    this.taskName = '';
    this.show = false;
  }

  addTask() {
    const newTask: Task = {
      name: this.taskName,
      completed: false,
    }
    this.taskAdded.emit(newTask);
    this.taskName = '';
    this.show = false;
  }
}
