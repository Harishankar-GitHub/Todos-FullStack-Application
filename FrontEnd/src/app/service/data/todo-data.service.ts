import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { API_URL, TODO_JPA_API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor
  (
    private http: HttpClient
  ) { }

  retrieveAllTodos(username)
  {
    //  return this.http.get<Todo[]>(`${API_URL}/users/${username}/todos`); 
    //  Instead of hard coding the URL "http://localhost:8080/users" we can use ${API_URL}
    //  console.log("Execute Hello World Bean Service");

    return this.http.get<Todo[]>(`${TODO_JPA_API_URL}/users/${username}/todos`); 
    // Using TODO_JPA_API_URL to fetch data in backend from H2 Database
    // Thats's why commenting API_URL
  }

  deleteTodo(username, id)
  {
    // return this.http.delete(`${API_URL}/users/${username}/todos/${id}`);

    return this.http.delete(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`);
    // Using TODO_JPA_API_URL to fetch data in backend from H2 Database
    // Thats's why commenting API_URL
  }

  retrieveTodo(username, id)
  {
    // return this.http.get<Todo>(`${API_URL}/users/${username}/todos/${id}`);
    // console.log("Execute Hello World Bean Service");

    return this.http.get<Todo>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`);
    // Using TODO_JPA_API_URL to fetch data in backend from H2 Database
    // Thats's why commenting API_URL
  }

  updateTodo(username, id, todo)
  {
    // return this.http.put(`${API_URL}/users/${username}/todos/${id}`, todo);

    return this.http.put(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`, todo);
    // Using TODO_JPA_API_URL to fetch data in backend from H2 Database
    // Thats's why commenting API_URL
  }

  createTodo(username, todo)
  {
    // return this.http.post(`${API_URL}/users/${username}/todos`, todo);

    return this.http.post(`${TODO_JPA_API_URL}/users/${username}/todos`, todo);
    // Using TODO_JPA_API_URL to fetch data in backend from H2 Database
    // Thats's why commenting API_URL
  }

}
