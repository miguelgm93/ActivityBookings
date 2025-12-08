import { Component } from '@angular/core';

@Component({
  selector: 'lab-footer',
  imports: [],
  template: `
    <footer>
      <nav>
        <a [href]="author.url" target="_blank">
          © 2025 {{author.name}}
        </a>
        <button>Aceptar cookies</button>
      </nav> 
</footer>
  `,
  styles: ``,
})
export class Footer {
  author = {
    name:'Miguel Guerrero',
    url: 'https://github.com/miguelgm93'
  }

}
