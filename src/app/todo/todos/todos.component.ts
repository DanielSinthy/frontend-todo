import { Component, OnInit } from '@angular/core';
import { Todo } from '../../shared/models/todo.model';
import { TodoService } from 'src/app/shared/services/todo.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  
  public todos: Todo[];
  public sort: string = 'newToOld';

  constructor(
    private todoService: TodoService,
  ) {
    todoService.getTodos().subscribe(data=> {
      this.todos = Object.values(data).reverse();
    });
  }

  ngOnInit(): void {

  }

  public addToDoItem(event: any){
    if(this.sort=='newToOld'){
      this.todos.unshift(event);
    }else {
      this.todos.push(event);
    }
  }


}
