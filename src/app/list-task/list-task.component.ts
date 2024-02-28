import { Component } from '@angular/core';
import { Tarefa } from '../tarefa.model';
import { TarefaService } from '../tarefa.service';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListaTarefasComponent {
  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) {
    this.tarefas = this.tarefaService.getTarefas();
  }

  removerTarefa(id: number): void {
    this.tarefaService.removerTarefa(id);
    this.tarefas = this.tarefaService.getTarefas(); // Atualizar a lista de tarefas após remover
  }

  atualizarTarefa(tarefa: Tarefa): void {
    this.tarefaService.atualizarTarefa(tarefa);
  }
}
