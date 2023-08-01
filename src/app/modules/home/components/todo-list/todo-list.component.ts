import { Component, DoCheck, OnInit } from '@angular/core';

// interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');

  constructor() { }

  ngDoCheck(): void { // esse docheck faz uma verificação toda vez que tiver ma ação no componente (qualquer ação)
    this.setLocalStorge()
  }

  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1)
  }

  public deleteAllTaskList() {
    const confirm = window.confirm("Você realmente deseja deletar tudo?");
    if (confirm) this.taskList = [];
  }

  public setEmitTaskList(event: string) {
    this.taskList.push({
      task: event,
      checked: false
    });
  }

  public validationInput(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm("O item esta vazio, você deseja deletar?")
      if (confirm) {
        this.taskList.splice(index, 1)
      }
    }
  }

  setLocalStorge = () => {
    if (this.taskList) {
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked)) // Aqui ele faz a ordenação numerica atraves do checked
      localStorage.setItem("list", JSON.stringify(this.taskList)) // o localStorage salva os dados no navegador. Para verifica-lo, vá em (Inspecionar > Application > Local Storage)
    }
  }
}
