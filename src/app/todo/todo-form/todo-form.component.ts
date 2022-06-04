import { Component, OnInit } from '@angular/core';
import { Todo } from '../../shared/models/todo.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

  onFormSubmit(form: NgForm) {
    if (form.invalid) return alert('FORM INVALID');

    form.reset();
  }
}
