import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: 'add-task.component.html',
  styleUrls: ['add-task.component.scss']
})
export class AddTaskComponent {
  @Output() taskAdded = new EventEmitter<string>();

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
    this.taskAdded.emit(this.taskName);
    this.taskName = '';
    this.show = false;
  }
}
