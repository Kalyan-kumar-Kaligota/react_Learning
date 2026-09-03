import { Component, signal } from '@angular/core';

@Component({
  selector: 'ap-app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Admin_portal_testing');
}
