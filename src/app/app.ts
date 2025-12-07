import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'lab-root',
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to {{ title() }}!!!</h1>
    <p>Angular works</p>

    <router-outlet />
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('ActivityBookings');
}
