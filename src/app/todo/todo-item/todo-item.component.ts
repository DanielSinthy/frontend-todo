import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../shared/models/todo.model';
import { TodoService } from 'src/app/shared/services/todo.service';
import * as moment from 'moment';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {

  @Output('toDoItem') deleteItemEvent = new EventEmitter<Todo>();

  @Input() todoItem: any; 

  constructor(
    private todoService: TodoService
  ) {}

  ngOnInit(): void {

  }

  get timestamp(){
    return moment(this.todoItem.timestamp).format("DD-MM-YYYY")
  }

  public deleteToDo(){
    this.todoService.deleteTodo(this.todoItem).subscribe(data => {
      this.deleteItemEvent.emit();
    })
  }



}
