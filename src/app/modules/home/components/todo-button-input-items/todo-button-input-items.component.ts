import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-button-input-items',
  templateUrl: './todo-button-input-items.component.html',
  styleUrls: ['./todo-button-input-items.component.scss']
})
export class TodoButtonInputItemsComponent {
  @Output() public emitItemTaskList = new EventEmitter();
  public addItemTaskList: string = ""

  public submitItemTaskList(){
    this.addItemTaskList = this.addItemTaskList.trim() // o trim tira os espaços a mais da string
    if (this.addItemTaskList) {
      this.emitItemTaskList.emit(this.addItemTaskList);
      this.addItemTaskList = "";
    }
  }

}
