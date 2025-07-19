import { Component, signal } from '@angular/core';
import { LivroListaComponent } from './livro-lista/livro-lista.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LivroListaComponent],
  template: '<app-livro-lista></app-livro-lista>',
  styleUrl: './app.css'
})
export class App {
}
