import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() { }

  tasks: string[] = [];

  onTaskAdded(taskName: string) {
    this.tasks.push(taskName);
  }
}
