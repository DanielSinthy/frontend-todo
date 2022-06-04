import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { TodosComponent } from './todos/todos.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { EditTodoDialogComponent } from './todo-edit-dialog/todo-edit-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';




@NgModule({
  declarations: [
    TodosComponent,
    TodoFormComponent,
    TodoItemComponent,
    EditTodoDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
  ]
})
export class TodoModule { }
