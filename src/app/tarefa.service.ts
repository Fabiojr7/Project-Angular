import { Injectable } from '@angular/core';
import { Tarefa } from './models/tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private tarefas: Tarefa[] = [];

  constructor() {
    
    this.tarefas.push({ id: 1, titulo: 'Go market', concluida: false });
    this.tarefas.push({ id: 2, titulo: 'Study Angular', concluida: true });
  }

  getTarefas(): Tarefa[] {
    return this.tarefas;
  }

  adicionarTarefa(tarefa: Tarefa): void {
    this.tarefas.push(tarefa);
  }

  removerTarefa(id: number): void {
    this.tarefas = this.tarefas.filter(tarefa => tarefa.id !== id);
  }

  atualizarTarefa(tarefaAtualizada: Tarefa): void {
    const index = this.tarefas.findIndex(tarefa => tarefa.id === tarefaAtualizada.id);
    if (index !== -1) {
      this.tarefas[index] = tarefaAtualizada;
    }
  }
}