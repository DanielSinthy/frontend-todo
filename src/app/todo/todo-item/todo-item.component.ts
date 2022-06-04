import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../shared/models/todo.model';
import { TodoService } from 'src/app/shared/services/todo.service';
import * as moment from 'moment';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {

  @Input() todoItem: any; 

  constructor() {}

  ngOnInit(): void {

  }

  get timestamp(){
    return moment(this.todoItem.timestamp).format("DD-MM-YYYY")
  }



}
