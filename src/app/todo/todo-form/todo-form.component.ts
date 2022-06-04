import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../../shared/models/todo.model';
import { NgForm } from '@angular/forms';
import { TodoService } from '../../shared/services/todo.service'

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {

  @Output('toDoItem') newItemEvent = new EventEmitter<Todo>();

  public submitted: boolean = false;
  public formTitle: string; 
  

  constructor(
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
  }

  onFormSubmit(form: NgForm) {
    if (form.invalid) return alert('FORM INVALID');

    this.submitted = true;

    form.reset();
  }

  public newTodo(){
    let toDo = new Todo(this.formTitle)
    this.todoService.createTodo(toDo).subscribe(data => {
      if (data == "Todo has been created."){
        this.newItemEvent.emit(toDo);
      }
    });
  }
}
