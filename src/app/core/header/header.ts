import { Component } from '@angular/core';

@Component({
  selector: 'lab-header',
  imports: [],
  template: `
    <header>
      <nav>
        <a [href]="">
          {{title}}
        </a>
      </nav>
    </header>
  `,
  styles: ``,
})
export class Header {
 public readonly title = "Reserva de actividades"
}
