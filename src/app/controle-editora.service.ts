import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  editoras: Array<Editora> = [
    { codEditora: 1, nome: 'Editora Alfa' },
    { codEditora: 2, nome: 'Editora Beta' },
    { codEditora: 3, nome: 'Editora Gama' },
    { codEditora: 4, nome: 'Alta Books' },
    { codEditora: 5, nome: 'Pearson' },
  ];

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    const resultado = this.editoras.filter(e => e.codEditora == codEditora);
    return resultado[0].nome;
  }
}
