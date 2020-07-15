import { Routes } from '@angular/router';
import { ListarTarefaComponent } from './listar/listar-tarefa.component';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefaComponent } from './editar';

export const TarefasRoutes: Routes = [
  { path: 'tarefas', redirectTo: 'tarefas/listar'},
  { path: 'tarefas/listar', component: ListarTarefaComponent},
  { path: 'tarefas/cadastrar', component: CadastrarTarefaComponent},
  { path: 'tarefas/editar/:id', component: EditarTarefaComponent}

];
