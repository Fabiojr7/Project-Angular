import { Component } from '@angular/core';
import { TarefaService } from '../tarefa.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AdicionarTarefaComponent {
  novaTarefaTitulo: string = '';

  constructor(private tarefaService: TarefaService) {}

  adicionarTarefa(): void {
    if (this.novaTarefaTitulo.trim()) {
      this.tarefaService.adicionarTarefa({ id: 0, titulo: this.novaTarefaTitulo, concluida: false });
      this.novaTarefaTitulo = ''; // Limpar o campo de texto após adicionar a tarefa
    }
  }
}
