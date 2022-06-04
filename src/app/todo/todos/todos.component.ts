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
      if(this.sort=='newToOld'){
        this.todos = Object.values(data).reverse();
      }else {
        this.todos = Object.values(data);
      }
    });
  }

  ngOnInit(): void {

  }

  public addToDoItem(event: any){
    this.todoService.getTodos().subscribe(data=> {
      if(this.sort=='newToOld'){
        this.todos = Object.values(data).reverse();
      }else {
        this.todos = Object.values(data);
      }
    });
}


}
