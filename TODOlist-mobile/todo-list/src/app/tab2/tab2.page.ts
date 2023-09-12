import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  themeToggle = false;
  weightTextToggle = 'normal';

  constructor() { }

  ngOnInit() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: light)');

    this.initializeDarkTheme(prefersDark.matches);

    prefersDark.addEventListener('change', (mediaQuery) => this.initializeDarkTheme(mediaQuery.matches));
  }

  initializeDarkTheme(isDark: any) {
    this.themeToggle = isDark;
    this.toggleDarkTheme(isDark);
  }

  toggleChange(ev: any) {
    this.toggleDarkTheme(ev.detail.checked);
  }

  toggleDarkTheme(shouldAdd: any) {
    document.body.classList.toggle('dark', shouldAdd);
  }
}
