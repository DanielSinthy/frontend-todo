import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  public getTodos(){
    return this.http.get(this.apiUrl+'/todos/',
    {responseType: 'json'})
  }

  public deleteTodo(todo:Todo){
    const options = {
      body: {
        "id": todo.id
      }
    };
    
    return this.http.delete(this.apiUrl+'/todos/', options)
  }

}