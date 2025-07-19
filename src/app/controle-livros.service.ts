import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  livros: Array<Livro> = [
    new Livro(1, 1, 'Angular para Iniciantes', 'Um guia completo para iniciantes em Angular.', ['João Silva']),
    new Livro(2, 2, 'Avançando com Angular', 'Técnicas avançadas para desenvolvedores experientes.', ['Maria Oliveira']),
    new Livro(3, 3, 'Angular e TypeScript', 'Integração entre Angular e TypeScript.', ['Carlos Souza']),
    new Livro(4, 4, 'Use a Cabeça: Java', 'Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (OO) e Java.', ['Bert Bates', 'Kathy Sierra']),
    new Livro(5, 5, 'Java, como Programar', 'Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel', ['Paul Deitel', 'Harvey Deitel'])
  ];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const maiorCodigo = this.livros.length > 0 ? Math.max(...this.livros.map(l => l.codigo)) : 0;
    livro.codigo = maiorCodigo + 1;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const indice = this.livros.findIndex(livro => livro.codigo === codigo);
    this.livros.splice(indice, 1);
  }
}
