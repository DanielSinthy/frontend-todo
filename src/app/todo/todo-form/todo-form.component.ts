import { Component, OnInit } from '@angular/core';
import { Todo } from '../../shared/models/todo.model';
import { NgForm } from '@angular/forms';
import { TodoService } from '../../shared/services/todo.service'

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {

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
    this.todoService.createTodo(new Todo(this.formTitle)).subscribe(data => {
      console.log(data)
    });
  }
}
