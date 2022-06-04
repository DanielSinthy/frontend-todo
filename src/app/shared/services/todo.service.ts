import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodoService {

  private apiUrl = environment.apiURL;

  constructor(
    private http: HttpClient
  ) {}

  public createTodo(todo: Todo){
    return this.http.post(this.apiUrl+'/todos/', 
    {
      "text": todo.text
    },
    {responseType: 'text'});
  }

}