import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Todo } from '../../shared/models/todo.model';

@Component({
  selector: 'app-todo-edit-dialog',
  templateUrl: './todo-edit-dialog.component.html',
  styleUrls: ['./todo-edit-dialog.component.scss'],
})
export class EditTodoDialogComponent implements OnInit {

  public editedTextTodo: string;

  constructor(
    public dialogRef: MatDialogRef<EditTodoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public todo: Todo
  ) {}

  ngOnInit(): void {}

  close() {
    this.dialogRef.close();
  }

  onFormSubmit(form: NgForm) {
    if (form.invalid) return
    
    const updatedTodo = {
      ...this.todo,
      ...form.value
    }
    
    this.dialogRef.close(updatedTodo)
  }
}
