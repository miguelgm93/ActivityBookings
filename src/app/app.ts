import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./core/header/header";
import { Footer } from "./core/footer/footer";
import { Bookings } from "./bookings/bookings/bookings";

@Component({
  selector: 'lab-root',
  imports: [RouterOutlet, Header, Footer, Bookings],
  template: `
  <lab-header/>
    <lab-bookings/>
    <lab-footer/>

    <router-outlet />
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('ActivityBookings');
}
