import { Component, OnInit } from '@angular/core';
import { Todo } from '../../shared/models/todo.model';
import { TodoService } from 'src/app/shared/services/todo.service';
import * as moment from 'moment';
import { MatDialog } from '@angular/material/dialog';
import { EditTodoDialogComponent } from '../todo-edit-dialog/todo-edit-dialog.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  
  public todos: Todo[];
  public sort: string = 'newToOld';
  public filterDate: Date;

  constructor(
    private todoService: TodoService,
    private dialog: MatDialog
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


public updateListTodosEmitter(event: any){
  this.updateListTodos();
}

public updateListTodos(){
  this.todoService.getTodos().subscribe(data=> {
    this.todos = Object.values(data).reverse();
  });
}

public filterByDate(){
  if (this.filterDate){
    this.todoService.getTodos().subscribe(data=> {
      this.todos = Object.values(data).filter(item => {
        return moment(item.timestamp).format("DD-MM-YY").toString() == moment(this.filterDate).format("DD-MM-YY").toString()
      });
    });
  }
}

public editTodo(event: any){
  let dialogRef = this.dialog.open(EditTodoDialogComponent, {
    width: '700px',
    //data: event.text,
  });

  dialogRef.afterClosed().subscribe((result) => {
    if (result) {
      this.todoService.updateTodo(event, result.editedText).subscribe(data => {
        this.updateListTodos();
      })
    }
  })

}


}
