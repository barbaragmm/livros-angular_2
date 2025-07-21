import { Component, signal } from '@angular/core';
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],

  template: `
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="container-fluid">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" routerLink="/lista" routerLinkActive="active">Catálogo</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/dados" routerLinkActive="active">Novo</a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- O Angular irá renderizar o componente da rota ativa aqui -->
    <router-outlet></router-outlet>
  `,
  styleUrl: './app.css'
})
export class App {
}
